import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReportSearchView from "../views/ReportSearchView.vue";
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/prototype1",
        name: "prototype1",
        component: ReportSearchView,
    },
];
const router = new VueRouter({
    routes,
});
export default router;
//# sourceMappingURL=index.js.map