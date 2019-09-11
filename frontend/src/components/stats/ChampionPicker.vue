<template>
    <div class="scroll">
        <div @click="selectChampion(championId)" class="champ" :class="{ active: championId === selectedChampion }" v-for="championId in champions" :key="championId">
            <img :src="getChampionIcon(championId)">
            <div class="name">{{ getChampionName(championId) }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ChampionData } from "@/ddragon";

    @Component
    export default class ChampionPicker extends Vue {
        @Prop()
        championData!: ChampionData;

        @Prop()
        champions!: number[];

        getChampionName(id: number) {
            const champ = Object.values(this.championData.data).find(x => x.key === id + "");
            if (!champ) return "";

            return champ.name;
        }

        getChampionIcon(id: number) {
            const champ = Object.values(this.championData.data).find(x => x.key === id + "");
            if (!champ) return "";

            return `https://ddragon.leagueoflegends.com/cdn/${this.championData.version}/img/champion/${champ.id}.png`;
        }

        selectChampion(id: number) {
            const { region, accountId, season } = this.$route.params;
            this.$router.replace(`/${region}/${accountId}/${season}/${id}`);
        }

        get selectedChampion() {
            return +this.$route.params.champion;
        }
    }
</script>

<style lang="stylus" scoped>
    .scroll
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
            cursor pointer

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
</style>