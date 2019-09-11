<template>
    <div class="stats">
        <!-- Display the first katarina on full screen. -->
        <dancing-katarina v-if="(loading && !subsequentLoad) || !stats" />

        <!-- Do an overlay for subsequent ones. -->
        <div class="subsequent-load-indicator" v-else-if="loading && subsequentLoad">
            <dancing-katarina />
        </div>

        <stat-error v-else-if="errored" />
        <stats-container v-if="stats" :stats="stats" :summoner="summoner" :champion-data="championData" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from "vue-property-decorator";

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
        subsequentLoad = false;
        loading = false;
        errored = false;

        championData: ChampionData = <any>null;
        stats: PlayerStats = <any>null;
        summoner: Summoner = <any>null;

        async mounted() {
            this.loadData();
        }

        @Watch("$route.params.season")
        handleSeasonChange() {
            this.loadData();
        }

        private async loadData() {
            if (this.loading) return;
            if (this.stats) {
                this.subsequentLoad = true;
            }

            this.loading = true;
            this.errored = false;

            const { region, accountId, season } = this.$route.params;

            try {
                const [data, championData]: [PlayerStatsResult, ChampionData] = <any>await Promise.all([
                    fetch(`http://localhost:52001/api/v1/stats/${region.toUpperCase()}/${accountId}/CLASSIC/${season}`).then(x => x.json()),
                    dataPromise
                ]);

                if (!data.ok) {
                    this.errored = true;
                } else {
                    this.championData = championData;
                    this.stats = data.stats;
                    this.summoner = data.account.summoner;
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

        .subsequent-load-indicator
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            background-color rgba(0, 0, 0, 0.6)
            display flex
            align-items center
            justify-content center
            z-index 100
</style>