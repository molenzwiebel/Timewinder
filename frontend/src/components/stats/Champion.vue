<template>
    <div class="champion">
        <img :src="`https://cdn.communitydragon.org/latest/champion/${championId}/square`">
        <div class="aside">
            <span>{{ champion.name }}</span>
            <span>{{ champion.title }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ChampionData } from "@/ddragon";

    @Component
    export default class Champion extends Vue {
        name = "";
        title = "";

        @Prop()
        championData!: ChampionData;

        @Prop()
        championId!: number;

        get champion() {
            const champ = Object.values(this.championData.data).find(x => x.key === this.championId + "");
            if (!champ) return;

            return champ;
        }
    }
</script>

<style lang="stylus">
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
</style>