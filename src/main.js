import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.css'
Vue.config.productionTip = false;
if (process.env.NODE_ENV === "development") {
    require("./mock")
}
Vue.use(ElementUI)
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");