import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import Announcement from "./components/Announcement.vue";
import Article from "./components/Article.vue";
import Contact from "./components/Contact.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import Vuex from "vuex";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "animate.css/animate.min.css";

export const eventBus = new Vue();

Vue.config.productionTip = false;
Vue.component("announcement", Announcement);
Vue.component("appArticle", Article);
Vue.component("appContact", Contact);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        cart:{
            items:[]
        },
        cartTotal: 0
    }
});

Vue.filter("currency", function(value) {
    let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });

    return formatter.format(value);
});

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount("#app");
