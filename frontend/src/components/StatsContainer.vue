<template>
    <div class="parchment">
        <top-navbar :name="summoner.name" />

        <div class="body">
            <div class="tabs">
                <div class="tab active">Stats</div>
                <div class="spacing"></div>

                <select class="select" v-model="season">
                    <option :value="(i + 1).toString()" v-for="(_, i) in 9">Season {{ i + 1 }}</option>
                </select>
            </div>

            <!-- Show error if there are no stats. -->
            <no-stats v-if="!hasStats" :summoner="summoner" />

            <div class="content-stats" v-if="hasStats">
                <champion v-if="!isTotalStats" :champion-id="championId" :champion-data="championData" />
                <top-stats-block :stats="championStats" />
                <main-stats-block :stats="championStats" :global="isTotalStats" />
            </div>

            <div class="champ-select" v-if="hasStats">
                <div class="header">
                    <div class="count">Wins with <b>3/94</b> Champions.</div>
                    <div class="title">Filter By Champion</div>
                    <div class="clear"><button @click="clearChampion" class="blue-button">Clear Filter</button></div>
                </div>

                <champion-picker :champions="champions" :champion-data="championData" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ComputedStatistics, PlayerStats, Summoner } from "@/types";
    import TopStatsBlock from "@/components/stats/TopStatsBlock.vue";
    import TopNavbar from "@/components/stats/TopNavbar.vue";
    import MainStatsBlock from "@/components/stats/MainStatsBlock.vue";
    import Champion from "@/components/stats/Champion.vue";
    import { ChampionData } from "@/ddragon";
    import ChampionPicker from "@/components/stats/ChampionPicker.vue";
    import NoStats from "@/components/stats/NoStats.vue";

    @Component({
        components: { NoStats, ChampionPicker, Champion, MainStatsBlock, TopNavbar, TopStatsBlock }
    })
    export default class StatsContainer extends Vue {
        @Prop()
        stats!: PlayerStats;

        @Prop()
        summoner!: Summoner;

        @Prop()
        championData!: ChampionData;

        /**
         * @returns whether or not there are any stats recorded for the current settings
         */
        get hasStats() {
            return !!this.stats.lifetimeStatistics.length;
        }

        /**
         * @returns whether or not we are currently showing the global stats (not champion specific)
         */
        get isTotalStats() {
            return !this.$route.params.champion;
        }

        /**
         * @returns the champion id currently being shown
         */
        get championId() {
            return +this.$route.params.champion;
        }

        /**
         * @returns the stats for the current champion, or for 0 if none is selected
         */
        get championStats() {
            return this.computeStatisticsFor(this.championId || 0);
        }

        /**
         * @returns the list of champions that have stats collected on them
         */
        get champions() {
            return this.stats.lifetimeStatistics
                .sort((a, b) => b.count - a.count) // sort by games played
                .map(x => x.championId)
                .filter(x => x !== 0) // not the aggregate one
                .filter((x, i, a) => a.indexOf(x) === i); // filter out duplicates
        }

        /**
         * Clears the currently selected champion filter.
         */
        clearChampion() {
            const { region, accountId, season } = this.$route.params;
            this.$router.replace(`/${region}/${accountId}/${season}`);
        }

        /**
         * @returns the currently selected season, as a string
         */
        get season() {
            return this.$route.params.season;
        }

        /**
         * Sets the currently selected season. Works by replacing the route.
         * This also resets the current filter.
         */
        set season(value: string) {
            const { region, accountId } = this.$route.params;
            this.$router.replace(`/${region}/${accountId}/${value}`);
        }

        private computeStatisticsFor(champId: number) {
            const ret: ComputedStatistics = {};

            for (const stat of this.stats.lifetimeStatistics) {
                if (stat.championId !== champId) continue;

                ret[stat.statType] = {
                    count: stat.count,
                    value: stat.value,
                    average: stat.value / (stat.count === 0 ? 1 : stat.count)
                };
            }

            return ret;
        }
    }
</script>

<style scoped lang="stylus">
    parchment-width = 1159px

    *
        box-sizing border-box

    .parchment
        position relative
        background-image url(../assets/images/parchment_background.png)
        width parchment-width
        height 684px
        font-family FrizQuadrata

    .select
        border 1px solid #6B6545
        border-radius 3px
        font-size 0.8em
        font-weight bold
        font-family FrizQuadrata
        padding 2px 4px
        padding-right 8px
        background-color linear-gradient(to bottom, #F9F3DE, #DAD2B0)

    .body
        position absolute
        left 40px
        top 130px
        height 520px
        width 1080px
        border 1px solid #B19449

        .tabs
            position absolute
            left 10px
            top 5px
            right 15px
            display flex
            align-items center

            .tab
                background linear-gradient(to bottom, #C3B490, #BDAE8C 90%, #B5A77E)
                border 1px solid #C1A863
                border-top-left-radius 4px
                border-top-right-radius 4px
                margin-right 5px
                display flex
                align-items center
                justify-content center
                height 28px
                padding 0 10px
                font-family FrizQuadrata
                font-size 1em

            .tab.active
                background #C8AF68
                color #693419

            .spacing
                flex 1

        .content-stats
            position absolute
            left 10px
            top 33px
            right 10px
            background #C8AF68
            height 330px

        .champ-select
            position absolute
            top 370px
            left 50px
            width 975px
            display flex
            flex-direction column

            & > .header
                margin 0 5px
                display flex
                align-items flex-end

                .count, .title, .clear
                    flex 1

                .count
                    font-size 0.8em

                .count b
                    font-weight normal
                    color #c7984a

                .title
                    font-size 1.2em
                    color #512E0A
                    text-align center

                .clear
                    display flex
                    flex-direction column
                    align-items flex-end

                .clear .blue-button
                    margin-left auto
                    width 100px

    .blue-button
        background linear-gradient(to bottom, #5594E3, #3878C8 10%, #265895, #0E3466 80%, #2158A1)
        border-radius 3px
        box-shadow 1px 3px 2px 0 rgba(0,0,0,0.75)
        border none
        padding 5px 15px
        color white
        font-family FrizQuadrata
        font-size 0.8em
        cursor pointer

        &:hover
            background linear-gradient(to bottom, #4a6cb1, #29548e 10%, #19345d, #0c2245 80%, #2158A1)
</style>