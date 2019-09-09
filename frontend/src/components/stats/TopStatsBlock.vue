<template>
    <div class="header-box">
        <div class="stat">
            <b>Won:</b>
            {{ won.toLocaleString() }}
        </div>

        <div class="stat">
            <b>Lost:</b>
            {{ lost.toLocaleString() }}
        </div>

        <div class="stat">
            <b>Win Ratio:</b>
            {{ winrate }}%
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ComputedStatistics } from "@/types";

    @Component
    export default class TopStatsBlock extends Vue {
        @Prop()
        stats!: ComputedStatistics;

        get won() {
            return this.stats["TOTAL_SESSIONS_WON"].value;
        }

        get lost() {
            // the lost value is empty, but this works too :LUL:
            return this.stats["TOTAL_SESSIONS_PLAYED"].value - this.won;
        }

        get winrate() {
            const total = this.won + this.lost;
            const rate = this.won / total;
            return (rate * 100).toFixed(1);
        }
    }
</script>

<style lang="stylus" scoped>
    .header-box
        position absolute
        top 20px
        left 260px
        height 50px
        width 520px
        display flex
        align-items center
        border 1px solid #917A40
        border-bottom-width 2px
        background linear-gradient(to bottom, #F4E7CB, #DECD9D)

        .stat
            flex 1
            text-align center
            font-size 1em
            color #9B541C

        .stat:last-child
            flex 0 210px

        .stat > b
            color black
            margin-right 4px
</style>