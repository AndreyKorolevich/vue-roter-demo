import {createApp} from 'vue';

import App from './App.vue';
import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "../src/components/notFound/notFound"
import Footer from "@/components/footer/Footer";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/teams'
        },
        {
            path: '/teams',
            components: {default: TeamsList, footer: Footer},
            children: [
                {
                    name:'team-members', path: ':teamId', component: TeamMembers, props: true
                },
            ]
        },
        {
            path: '/users',  components: {default: UsersList, footer: Footer},
        },
        {
            path: '/:notFound(.*)', component: NotFound
        },
    ],
    scrollBehavior(to, from, d) {
        console.log(to, from, d)
        return {top: 1000, left: 0}
    }
})

const app = createApp(App)

app.use(router)

app.mount('#app');
