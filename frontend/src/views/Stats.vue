<template>
    <div class="stats">
        <dancing-katarina v-if="loading" />
        <stat-error v-else-if="errored" />

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import DancingKatarina from "@/components/DancingKatarina.vue";
    import StatError from "@/components/StatError.vue";
    import HelloWorld from "@/components/LandingSearchForm.vue";

    interface LifetimeStatistic {
        value: number;
        count: number;
        championId: number;
        statType: string;
    }

    interface PlayerStats {
        lifetimeStatistics: LifetimeStatistic;
    }

    interface PlayerStatsResult {
        ok: boolean;
        stats: PlayerStats;
    }

    @Component({
        components: {
            HelloWorld,
            DancingKatarina,
            StatError
        },
    })
    export default class Stats extends Vue {
        loading = true;
        errored = false;

        stats: PlayerStats = <any>null;

        async mounted() {
            const { region, accountId, season, gameMode } = this.$route.params;

            try {
                const data: PlayerStatsResult =
                    await fetch(`http://localhost:52001/api/v1/stats/${region.toUpperCase()}/${accountId}/${gameMode}/${season}`)
                        .then(x => x.json());

                if (!data.ok) {
                    this.errored = true;
                } else {
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