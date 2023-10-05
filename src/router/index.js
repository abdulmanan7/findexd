import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
// import ApiService from '../services';
import mainView from '../components/Main';
import LoginLayout from '../components/LoginLayout';
const routes = [{
        path: '/',
        redirect: '/home',
        component: mainView,
        // beforeEnter(to, from, next) {
        //     if (!isLogin()) {
        //         next('/login');
        //     } else {
        //         next();
        //     }
        // },
        children: [{
            path: '/home',
            name: 'home',
            props: true,
            component: Home,
            meta: {
                sideBarKey: 'map',
            },
        }, ],
    },
    {
        path: '/login',
        component: LoginLayout,
        children: [{
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                sideBarKey: 'login',
            },
        }, ],
    }
];
// const isLogin = function () {
//     return ApiService.isLogin();
// };
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;