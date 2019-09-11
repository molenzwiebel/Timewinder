<template>
    <div class="landing">
        <div class="logo-and-search">
            <div class="logo">
                <img src="../assets/timewinder2x.png">
                <div class="aside">
                    <span class="title">Timewinder</span>
                    <div class="slogan">{{ slogan }}</div>
                </div>
            </div>

            <landing-search-form />
        </div>

        <div class="explanation">
            Timewinder shows you all your ranked stats, just like the old client used to. See your KDA, win rate, damage distribution and more, with data ranging back all the way to season 1. Experience a dose of nostalgia while seeing your stats, for absolutely free!
        </div>

        <div class="bottom-stats">
            <img src="../assets/stats-preview.png" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import LandingSearchForm from "@/components/LandingSearchForm.vue";

    const SLOGANS = [
        "Eternals, but free.",
        "The stats of old.",
        "Full of nostalgia.",
        "Small Indie Company",
        "May the old client rest in peace.",
    ];

    @Component({
        components: {
            LandingSearchForm,
        },
    })
    export default class Landing extends Vue {
        slogan = SLOGANS[Math.floor(Math.random() * SLOGANS.length)];
    }
</script>

<style lang="stylus" scoped>
    .landing
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-color #1b1b1b
        overflow hidden

        .logo-and-search
            position absolute
            top 20%
            left 50%
            transform translateX(-50%)
            display flex
            flex-direction column
            align-items center

        .logo
            display flex
            align-items center
            margin-bottom 30px

            & img
                width 85px
                height 85px

            .aside
                display flex
                flex-direction column
                color white
                margin-left 10px

                .title
                    font-family FrizQuadrata
                    color #c37b30
                    font-size 3em

                .slogan
                    font-family 'Open Sans', sans-serif
                    font-size 1.1em
                    color #fafafa

        .explanation
            font-family 'Open Sans', sans-serif
            position absolute
            bottom calc(35vh + 30px)
            margin 0 auto
            left 50%
            max-width 700px
            text-align center
            transform translateX(-50%)
            color #9c9c9c

        .bottom-stats
            position absolute
            bottom 0
            margin 0 auto
            height 35vh
            left 50%
            transform translateX(-50%)
            overflow hidden
</style>