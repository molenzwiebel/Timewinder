<template>
    <div class="no-stats">
        <img class="poro" src="../../assets/poro-sad.png">

        <div class="title">
            There's nothing here!
        </div>

        <div class="message">
            {{ summoner.name }} does not seem to have any ranked games played during this season. Try selecting a different season or searching for someone else.
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { Summoner } from "@/types";

    @Component
    export default class NoStats extends Vue {
        @Prop()
        summoner!: Summoner;
    }
</script>

<style scoped lang="stylus">
    .no-stats
        background-color #C8AF68
        position absolute
        top 33px
        padding-top 25px
        left 10px
        width 1050px
        height 460px
        display flex
        flex-direction column
        align-items center

    .poro
        width 180px
        height 180px

    .title
        font-family FrizQuadrata
        color #512e0a
        font-size 2.2em
        padding 20px

    .message
        margin-top 10px
        font-family 'Open Sans', sans-serif
        font-size 1em
        max-width 500px
        text-align center
        color #4b4024
</style>