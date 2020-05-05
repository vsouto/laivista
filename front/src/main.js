import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from "bootstrap-vue";
import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';
// @ts-ignore
import vuetify from '@/plugins/vuetify'; // path to vuetify export
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);
new Vue({
    // @ts-ignore
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map