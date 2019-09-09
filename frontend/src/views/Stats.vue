<template>
    <div class="stats">
        <dancing-katarina v-if="loading" />
        <stat-error v-else-if="errored" />
        <stats-container v-else :stats="stats" :summoner="summoner" :champion-data="championData" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import DancingKatarina from "@/components/DancingKatarina.vue";
    import StatError from "@/components/StatError.vue";
    import StatsContainer from "@/components/StatsContainer.vue";

    import { PlayerStats, PlayerStatsResult, Summoner } from "@/types";
    import dataPromise, { ChampionData } from "@/ddragon";

    @Component({
        components: {
            StatsContainer,
            DancingKatarina,
            StatError
        },
    })
    export default class Stats extends Vue {
        loading = true;
        errored = false;

        championData: ChampionData = <any>null;
        stats: PlayerStats = <any>null;
        summoner: Summoner = { acctId: 1, name: "Text" }; // TODO

        async mounted() {
            const { region, accountId, season } = this.$route.params;

            try {
                const [data, championData,/*, summoner*/]: [PlayerStatsResult, ChampionData/*, SearchResult*/] = <any>await Promise.all([
                    fetch(`http://localhost:52001/api/v1/stats/${region.toUpperCase()}/${accountId}/CLASSIC/${season}`).then(x => x.json()),
                    dataPromise
                    // fetch(`http://localhost:52001/api/v1/summoner/${region.toUpperCase()}/${accountId}/${gameMode}/${season}`).then(x => x.json()),
                ]);

                if (!data.ok) {
                    this.errored = true;
                } else {
                    this.championData = championData;
                    this.stats = data.stats;
                }
            } catch {
                this.errored = true;
            } finally {
                this.loading = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .stats
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-color #0e0e0e
        display flex
        align-items center
        justify-content center
</style>