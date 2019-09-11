import * as express from "express";
import * as cors from "cors";
import * as Redis from "ioredis";
import fetch from "node-fetch";

const PORT = process.env.PORT || 52124;
const LCU_HOST = "http://localhost:52123";
const REGIONS = ["EUW", "EUNE", "OCE", "NA", "TR", "BR", "LAN", "LAS"];
const GAMEMODES = ["CLASSIC"];

const redis = new Redis({
    keyPrefix: "timewinder:"
});

/**
 * Helper function that returns false if the region specified in the request
 * does not exist. Also ensures that a correct status is returned.
 */
function verifyRegion(req: express.Request, res: express.Response): boolean {
    if (!req.params.region || !REGIONS.includes(req.params.region)) {
        res.status(400).json({ ok: false, message: "Invalid region specified." });
        return false;
    }

    return true;
}

/**
 * Queries the stats of the specified user in the specified region. Note that
 * the accountId is a string, since newer accounts have IDs that do not fit inside
 * a javascript number.
 */
async function queryStats(region: string, accountId: string, gameMode: string, season: number): Promise<any | null> {
    const redisKey = "stats:" + region + ":" + accountId + ":" + gameMode + ":" + season;

    const existing = await redis.get(redisKey);
    if (existing) return JSON.parse(existing);

    try {
        const response = await fetch(LCU_HOST + "/api/stats/" + region + "/" + accountId + "/" + gameMode + "/" + season);
        if (response.status !== 200) return null;

        const text = await response.text();
        const json = JSON.parse(text.trim());
        await redis.setex(redisKey, 60 * 60 * 24, JSON.stringify(json)); // cache for 24h

        return json;
    } catch (_) {
        return null;
    }
}

/**
 * Queries the summoner in the specified region with the specified name. Prefers
 * redis lookup over making a request to the API.
 */
async function querySummoner(region: string, name: string): Promise<any | null> {
    const normalizedName = name.toLowerCase().replace(/\s+/g, "");
    const redisKey = "summoner:" + region + ":" + normalizedName;

    const existing = await redis.get(redisKey);
    if (existing) return JSON.parse(existing);

    try {
        const response = await fetch(LCU_HOST + "/api/summoner/" + region + "/" + normalizedName);
        if (response.status !== 200) return null;

        const text = await response.text();
        const json = JSON.parse(text.trim());
        if (!json.acctId) return null; // sometimes upstream returns an empty object?

        await redis.setex(redisKey, 60 * 30, JSON.stringify(json)); // cache for 30m

        return json;
    } catch (_) {
        return null;
    }
}

(async() => {
    console.log("[+] Starting Timewinder...");

    const app = express();
    app.use(cors());
    app.use(express.static("../frontend/dist"));

    app.get("/api/v1/summoner/:region/:name", async (req, res) => {
        if (!verifyRegion(req, res)) return;

        const summoner = await querySummoner(req.params.region, req.params.name);
        if (!summoner) return res.status(404).json({ ok: false, message: "Unknown summoner." });

        return res.json({ ok: true, summoner });
    });

    app.get("/api/v1/stats/:region/:accountId/:gameMode/:season", async (req, res) => {
        if (!verifyRegion(req, res)) return;
        if (!GAMEMODES.includes(req.params.gameMode)) return res.status(400).json({ ok: false, message: "Invalid gamemode." });

        const accountId = +req.params.accountId;
        const season = +req.params.season;
        if (!isFinite(accountId) || !isFinite(season) || season < 0 || season > 9) {
            return res.status(400).json({ ok: false, message: "Invalid account ID or season." });
        }

        const data = await queryStats(req.params.region, req.params.accountId, req.params.gameMode, season);
        if (!data) return res.status(404).json({ ok: false, message: "Unknown summoner or no stats recorded." });

        return res.json({ ok: true, stats: data.stats, account: data.account });
    });

    console.log("[+] Listening on 0.0.0.0:" + PORT + "... ^C to exit.");
    app.listen(PORT);
})();