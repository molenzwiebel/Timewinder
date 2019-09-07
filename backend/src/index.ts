import * as express from "express";
import * as cors from "cors";

const PORT = process.env.PORT || 51001;

(async() => {
    console.log("[+] Starting Timewinder...");

    const app = express();
    app.use(cors());

    console.log("[+] Listening on 0.0.0.0:" + PORT + "... ^C to exit.");
    app.listen(PORT);
})();