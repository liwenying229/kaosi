import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from '../views/LoginView.vue'
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
        children: [{
                path: "",
                meta: ["首页"],
                name: 'HomeIndex',
                component: () =>
                    import ("../components/HomeIndex.vue")
            }, {
                path: "2-1",
                meta: ["文章列表"],
                component: () =>
                    import ("../components/HomeWenz.vue")
            },
            {
                path: "2-2",
                meta: ["多层级路由示列"],
                component: () =>
                    import ("../components/HomeRouter.vue")
            },

        ]
    },
    {
        path: "/login",
        name: "MyLogin",
        component: Login
    },
];

const router = new VueRouter({
    routes,
});

export default router;