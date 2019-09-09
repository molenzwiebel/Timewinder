<template>
    <div class="error">
        <img class="poro" src="../assets/poro-sad.png">

        <div class="title">
            Oops!
        </div>

        <div class="message">
            There was an error loading that content. Maybe you mistyped the URL? Try going <router-link to="/">back</router-link> and searching again.
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class StatError extends Vue {
    }
</script>

<style scoped lang="stylus">
    .error
        display flex
        flex-direction column
        align-items center

    .poro
        width 200px
        height 200px

    .title
        font-family FrizQuadrata
        color #c37b30
        font-size 3em
        padding 20px

    .message
        margin-top 10px
        font-family 'Open Sans', sans-serif
        font-size 1.2em
        max-width 500px
        text-align center
        color white

    .message a
        color #1e87f0
</style>