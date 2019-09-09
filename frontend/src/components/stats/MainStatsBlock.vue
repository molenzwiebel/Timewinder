<template>
    <div class="stat-boxes">
        <div class="stat-box">
            <div class="title">Lifetime Totals</div>

            <div class="box">
                <div class="header">
                    <div class="kills">{{ stat("TOTAL_CHAMPION_KILLS") }}</div>
                    <div class="deaths">{{ stat("TOTAL_DEATHS_PER_SESSION") }}</div>
                    <div class="assists">{{ stat("TOTAL_ASSISTS") }}</div>
                </div>

                <div class="content">
                    <div>
                        <div class="stat" v-for="[text, statName] in statBlocks[0]" v-if="stats[statName]">
                            <div class="title">{{ text }}</div>
                            <div class="value">{{ stat(statName) }}</div>
                        </div>
                    </div>

                    <div>
                        <div class="stat" v-for="[text, statName] in statBlocks[1]" v-if="stats[statName]">
                            <div class="title">{{ text }}</div>
                            <div class="value">{{ stat(statName) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="stat-box">
            <div class="title">Per Game Averages</div>

            <div class="box">
                <div class="header">
                    <div class="kills">{{ avgStat("TOTAL_CHAMPION_KILLS") }}</div>
                    <div class="deaths">{{ avgStat("TOTAL_DEATHS_PER_SESSION") }}</div>
                    <div class="assists">{{ avgStat("TOTAL_ASSISTS") }}</div>
                </div>

                <div class="content">
                    <div>
                        <div class="stat" v-for="[text, statName] in statBlocks[2]" v-if="stats[statName]">
                            <div class="title">{{ text }}</div>
                            <div class="value">{{ avgStat(statName) }}</div>
                        </div>
                    </div>

                    <div>
                        <div class="stat" v-for="[text, statName] in statBlocks[3]" v-if="stats[statName]">
                            <div class="title">{{ text }}</div>
                            <div class="value">{{ avgStat(statName) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ComputedStatistics } from "@/types";

    @Component
    export default class MainStatsBlock extends Vue {
        @Prop()
        stats!: ComputedStatistics;

        @Prop()
        global!: boolean;

        /**
         * Helper that returns the formatted value of the specified stat.
         */
        stat(name: string) {
            if (!this.stats[name]) return "0";
            return this.stats[name].value.toLocaleString();
        }

        /**
         * Helper that returns the formatted average value of the specified stat.
         */
        avgStat(name: string) {
            if (!this.stats[name]) return (0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2});
            return this.stats[name].average.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2});
        }

        /**
         * @returns the block of stats shown to the player
         */
        get statBlocks() {
            return [
                [
                    ["Max Kills", "MAX_CHAMPIONS_KILLED"],
                    ["Total Turrets Destroyed", "TOTAL_TURRETS_KILLED"],
                    ["Minions Killed", "TOTAL_MINION_KILLS"],
                    ...(this.global ? [["Monsters Killed", "TOTAL_NEUTRAL_MINIONS_KILLED"]] : []),
                    ["Double Kills", "TOTAL_DOUBLE_KILLS"],
                    ["Triple Kills", "TOTAL_TRIPLE_KILLS"],
                    ["Quadra Kills", "TOTAL_QUADRA_KILLS"],
                    ["Penta Kills", "TOTAL_PENTA_KILLS"]
                ],

                [
                    ["Max Deaths", "MAX_NUM_DEATHS"],
                    ...(this.global ? [["Healing Done", "TOTAL_HEAL"]] : []),
                    ["Damage Dealt", "TOTAL_DAMAGE_DEALT"],
                    ["Physical Damage Dealt", "TOTAL_PHYSICAL_DAMAGE_DEALT"],
                    ["Magic Damage Dealt", "TOTAL_MAGIC_DAMAGE_DEALT"],
                    ...(this.global ? [["Largest Critical Strike", "MAX_LARGEST_CRITICAL_STRIKE"]] : []),
                    ["Gold Earned", "TOTAL_GOLD_EARNED"],
                    ...(this.global ? [["Longest Game", "MAX_TIME_PLAYED"]] : [])
                ],

                [
                    ["Total Turrets Destroyed", "TOTAL_TURRETS_KILLED"],
                    ["Minions Killed", "TOTAL_MINION_KILLS"],
                    ...(this.global ? [["Monsters Killed", "TOTAL_NEUTRAL_MINIONS_KILLED"]] : []),
                    ["Double Kills", "TOTAL_DOUBLE_KILLS"],
                    ["Triple Kills", "TOTAL_TRIPLE_KILLS"],
                    ["Quadra Kills", "TOTAL_QUADRA_KILLS"],
                    ["Penta Kills", "TOTAL_PENTA_KILLS"]
                ],

                [
                    ...(this.global ? [["Healing Done", "TOTAL_HEAL"]] : []),
                    ["Damage Dealt", "TOTAL_DAMAGE_DEALT"],
                    ["Physical Damage Dealt", "TOTAL_PHYSICAL_DAMAGE_DEALT"],
                    ["Magic Damage Dealt", "TOTAL_MAGIC_DAMAGE_DEALT"],
                    ...(this.global ? [["Largest Critical Strike", "MAX_LARGEST_CRITICAL_STRIKE"]] : []),
                    ["Gold Earned", "TOTAL_GOLD_EARNED"]
                ],
            ];
        }
    }
</script>

<style lang="stylus">
    .stat-boxes
        position absolute
        top 90px
        left 10px
        right 5px
        height 235px
        display flex

    .stat-box
        flex 1
        display flex
        height 100%
        flex-direction column

        & > .title
            width 100%
            text-align center
            font-size 1.2em
            color #512E0A
            margin 5px

        .box
            flex 1
            background linear-gradient(to bottom, #F2EAD4, #DFCB9B)
            border 1px solid #917A40
            border-bottom-width 2px
            display flex
            flex-direction column

            .header
                margin 10px
                margin-bottom 0
                padding-bottom 5px
                display flex
                align-items center
                justify-content center
                border-bottom 1px solid #BEB596

                .kills, .deaths, .assists
                    margin-left 10px
                    padding-left 20px
                    background-repeat no-repeat
                    background-size 16px 18px

                .kills
                    background-image url(../../assets/images/kills.png)

                .deaths
                    background-image url(../../assets/images/deaths.png)

                .assists
                    background-image url(../../assets/images/assists.png)

            .content
                display flex

            .content > div
                margin-top 5px
                flex 1
                display flex
                flex-direction column

            .content .stat
                display flex
                align-items center
                font-size 0.9em
                margin-bottom 4px

                & > .title
                    flex 0 0 170px
                    text-align right

                & > .value
                    margin-left 10px
                    flex 1
                    color #915022

        &:nth-child(2)
            margin-left 10px
</style>