<template>
    <div id="app">
        <div class="parchment">
            <div class="topnav">
                <div class="top-tabs">
                    <div class="profile">Yahoo Answers</div>
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

            <div class="body">
                <div class="tabs">
                    <div class="tab active">Stats</div>
                    <div class="tab">Graphs</div>
                    <div class="spacing"></div>
                    <select class="select">
                        <option :selected="i === 8" v-for="(_, i) in 9">Season {{ i + 1 }}</option>
                    </select>
                </div>

                <div class="content-stats">
                    <div class="champion">
                        <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                        <div class="aside">
                            <span>Sona</span>
                            <span>Maven of the Strings</span>
                        </div>
                    </div>

                    <div class="header-box">
                        <div class="stat">
                            <b>Won:</b>
                            2
                        </div>

                        <div class="stat">
                            <b>Lost:</b>
                            1
                        </div>

                        <div class="stat">
                            <b>Win Ratio:</b>
                            66.7%
                        </div>
                    </div>

                    <div class="stat-boxes">
                        <div class="stat-box">
                            <div class="title">Lifetime Totals</div>

                            <div class="box">
                                <div class="header">
                                    <div class="kills">9</div>
                                    <div class="deaths">8</div>
                                    <div class="assists">32</div>
                                </div>

                                <div class="content">
                                    <div>
                                        <div class="stat">
                                            <div class="title">Max Kills</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Total Turrets Destroyed</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Minions Killed</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Double Kills</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Triple Kills</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Quadra Kills</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Penta Kills</div>
                                            <div class="value">5</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="stat">
                                            <div class="title">Max Deaths</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Damage Dealt</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Physical Damage Dealt</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Magic Damage Dealt</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Gold Earned</div>
                                            <div class="value">5</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="stat-box">
                            <div class="title">Per Game Averages</div>

                            <div class="box">
                                <div class="header">
                                    <div class="kills">9</div>
                                    <div class="deaths">8</div>
                                    <div class="assists">32</div>
                                </div>

                                <div class="content">
                                    <div>
                                        <div class="stat">
                                            <div class="title">Total Turrets Destroyed</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Minions Killed</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Double Kills</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Triple Kills</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Quadra Kills</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Penta Kills</div>
                                            <div class="value">5</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="stat">
                                            <div class="title">Damage Dealt</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Physical Damage Dealt</div>
                                            <div class="value">5</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Magic Damage Dealt</div>
                                            <div class="value">26,334.66</div>
                                        </div>

                                        <div class="stat">
                                            <div class="title">Gold Earned</div>
                                            <div class="value">5</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="champ-select">
                    <div class="header">
                        <div class="count">Wins with <b>3/94</b> Champions.</div>
                        <div class="title">Filter By Champion</div>
                        <div class="clear"><button class="blue-button">Clear Filter</button></div>
                    </div>

                    <div class="scroll">
                        <div class="champ active">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <!--<div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>

                        <div class="champ">
                            <img src="https://cdn.communitydragon.org/latest/champion/Sona/square">
                            <div class="name">Sona</div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
    parchment-width = 1159px

    *
        box-sizing border-box

    #app
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        display flex
        align-items center
        justify-content center
        background-color black

    .parchment
        position relative
        background-image url(assets/images/parchment_background.png)
        width parchment-width
        height 684px
        font-family FrizQuadrata

    // <editor-fold>
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
                margin-top 10px
                border 1px solid #453F2D
                font-size 0.9em
                flex 0 140px
                overflow hidden
                padding-left 3px
                height 30px
    // </editor-fold>

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

            .champion
                position absolute
                top 30px
                left 10px
                display flex
                align-items flex-end

                & > img
                    width 60px
                    height 60px

                & .aside
                    margin-left 10px
                    height 65px
                    display flex
                    flex-direction column
                    justify-content center
                    font-size 1.05em

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
                                background-image url(assets/images/kills.png)

                            .deaths
                                background-image url(assets/images/deaths.png)

                            .assists
                                background-image url(assets/images/assists.png)

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
                                margin-left 15px
                                flex 1
                                color #915022

                    &:nth-child(2)
                        margin-left 10px
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

            & > .scroll
                margin-top 8px
                height 110px
                background-color #C9B06D
                border 1px solid #947B36
                overflow-y hidden
                overflow-x auto
                white-space nowrap

                .champ
                    display inline-block
                    margin 1px 1px

                .champ.active
                    background-color #80CFFF

                .champ img
                    margin 4px 4px 0 4px
                    width 60px
                    height 60px

                .champ img::before
                    position absolute
                    top -1px
                    bottom -1px
                    left -1px
                    right -1px
                    background-color red

                .champ .name
                    width 64px
                    font-size 0.8em
                    text-align center


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