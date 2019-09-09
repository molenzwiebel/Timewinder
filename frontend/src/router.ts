import Vue from "vue";
import Router from "vue-router";

import Landing from "@/views/Landing.vue";
import Stats from "@/views/Stats.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        component: Landing
    }, {
        path: "/:region/:accountId/:season/:gameMode/:champion?",
        component: Stats
    }, {
        path: "*",
        redirect: "/"
    }]
});
