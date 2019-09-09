<template>
    <div class="topnav">
        <div class="top-tabs">
            <div class="profile">{{ name }}</div>
            <div class="ranked">Ranked Teams</div>
            <button class="create-ranked blue-button">Create a Ranked Team</button>
        </div>

        <div class="tabs">
            <div class="tab">Profile</div>
            <div class="tab active">Ranked Stats</div>
            <div class="tab">Match History</div>
            <div class="tab">Champions</div>
            <div class="tab">Runes</div>
            <div class="tab">Masteries</div>
            <div class="tab">Spells</div>
            <div class="tab">Achievements</div>
            <input type="text" placeholder="Find Summoner" class="input">
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
    export default class TopNavbar extends Vue {
        @Prop()
        name!: string;
    }
</script>

<style lang="stylus" scoped>
    .topnav
        .top-tabs
            position absolute
            top 40px
            left 40px
            display flex
            align-items flex-end

            .profile
                background linear-gradient(to bottom, #F0ECE6, #E1D4A8)
                border 1px solid #AC954D
                border-top-left-radius 3px
                border-top-right-radius 3px
                border-bottom-width 0
                font-family FrizQuadrata
                color #7D312B
                font-size 1.6em
                width 220px
                height 45px
                display flex
                align-items center
                justify-content center

            .ranked
                background linear-gradient(to bottom, #F0D694, #D8CA9F 80%, #C3B38B)
                border 1px solid #BDA45C
                border-top-left-radius 3px
                border-top-right-radius 3px
                border-bottom-width 0
                font-family FrizQuadrata
                margin-left 3px
                color black
                font-size 1em
                width 220px
                height 40px
                display flex
                align-items center
                justify-content center

            .create-ranked
                margin-left 10px
                margin-bottom 6px
                height 30px
                width 180px
                color alpha(white, 90%)
                font-size 0.85em

        .tabs
            position absolute
            left 40px
            top 85px
            height 45px
            width 1080px
            background linear-gradient(to bottom, #E3D3A8, #E0CEA2)
            border 1px solid #B19449
            border-bottom-width 0
            display flex

            .tab
                flex 1
                margin 3px 0 3px 2px
                border 1px solid #B9A36B
                border-radius 2px
                background linear-gradient(to bottom, #FFF4DC, #F2EEDF 10%, #E1CFA3 90%, #EBD7A5)
                font-family FrizQuadrata
                display flex
                align-items center
                justify-content center
                font-size 0.9em
                color #4B4024

            .tab.active
                background linear-gradient(to bottom, #FDEECA, #F1E1B4 90%, #FFEEC4)
                color #734a3b
                box-shadow inset 1px 1px 2px 0 rgba(0,0,0,0.3)

            .input
                margin 3px 4px
                margin-top 6px
                border 1px solid #453F2D
                font-size 0.9em
                flex 0 140px
                overflow hidden
                padding-left 3px
                height 30px

    .blue-button
        background linear-gradient(to bottom, #5594E3, #3878C8 10%, #265895, #0E3466 80%, #2158A1)
        border-radius 3px
        box-shadow 1px 3px 2px 0 rgba(0,0,0,0.75)
        border none
        padding 5px 15px
        color white
        font-family FrizQuadrata
        font-size 0.8em
</style>