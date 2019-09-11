<template>
    <div class="search-form">
        <div class="inline">
            <input v-model="name" type="text" placeholder="Summoner Name..." @keyup.enter="search">
            <select v-model="region">
                <option value="euw">EUW</option>
                <option value="eune">EUNE</option>
                <option value="na">NA</option>
                <option value="lan">LAN</option>
                <option value="las">LAS</option>
                <option value="jp">JP</option>
                <option value="tr">TR</option>
                <option value="br">BR</option>
                <option value="ru">RU</option>
            </select>
        </div>

        <div class="search-and-error">
            <div v-if="errored" class="error">That summoner couldn't be found.</div>
            <button class="submit" :class="{ loading: searching }" @click="search">Search</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { SearchResult } from "@/types";

    const DEFAULT_SEASON = 9;

    @Component
    export default class LandingSearchForm extends Vue {
        name = "";
        region = "euw";

        searching = false;
        errored = false;

        mounted() {
            this.name = this.$route.query.name as string || "";
        }

        async search() {
            if (!this.name) return;
            if (this.searching) return;

            this.searching = true;
            this.errored = false;

            try {
                const data: SearchResult = await fetch(`http://localhost:52001/api/v1/summoner/${this.region.toUpperCase()}/${encodeURIComponent(this.name)}`).then(x => x.json());
                if (!data.ok) {
                    this.errored = true;
                } else {
                    this.$router.push(`/${this.region}/${data.summoner.acctId}/${DEFAULT_SEASON}`);
                }
            } catch {
                this.errored = true;
            } finally {
                this.searching = false;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .search-form
        display flex
        flex-direction column

    .inline
        display flex
        align-items center

    .search-and-error
        margin-top 10px
        display flex
        align-items center

        .error
            flex 1
            color red
            font-family 'Open Sans', sans-serif

    .submit
        margin-left auto
        background-color #1e87f0
        border 1px solid darken(#1e87f0, 5%)
        height 40px
        font-family 'Open Sans', sans-serif
        font-size 1.1em
        color white
        padding 0 20px
        cursor pointer
        transition 0.2s ease
        outline none

        &.loading
            color transparent
            background-image url(../assets/loading-spinner.svg)
            background-position center
            background-repeat no-repeat
            background-size 20px 20px
            background-color darken(#1e87f0, 20%)
            cursor progress

        &:hover:not(.loading)
            background-color lighten(#1e87f0, 10%)

    input, select
        box-sizing border-box
        height 40px
        border 1px solid #a0a0a0
        font-family 'Open Sans', sans-serif
        font-size 1.1em
        outline none
        transition 0.2s ease

        &:focus, &:active
            border-color #1e87f0

    input
        width 400px
        padding 0 5px
        border-right-width 0

    select
        width 70px
</style>
