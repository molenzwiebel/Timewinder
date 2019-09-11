export interface LifetimeStatistic {
    value: number;
    count: number;
    championId: number;
    statType: string;
}

export type ComputedStatistics = { [key: string]: ComputedStatistic };

export interface ComputedStatistic {
    value: number;
    count: number;
    average: number;
}

export interface PlayerStats {
    lifetimeStatistics: LifetimeStatistic[];
}

export interface PlayerStatsResult {
    ok: boolean;
    account: Account;
    stats: PlayerStats;
}

export interface Account {
    summoner: Summoner;
}

export interface Summoner {
    acctId: number;
    name: string;
}

export interface SearchResult {
    ok: boolean;
    summoner: Summoner;
}