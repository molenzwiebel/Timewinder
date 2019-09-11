export interface ChampionData {
    version: string;
    data: {
        [key: string]: {
            key: string; // actually the ID, but in string form. WTF riot?
            name: string;
            title: string;
            id: string; // actually the key, ???????????
        }
    };
}

const dataPromise: Promise<ChampionData> = fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then(x => x.json())
    .then(x => x[0])
    .then(x => fetch(`https://ddragon.leagueoflegends.com/cdn/${x}/data/en_US/champion.json`))
    .then(x => x.json());

export default dataPromise;