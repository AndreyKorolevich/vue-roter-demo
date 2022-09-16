import {createApp} from 'vue';

import App from './App.vue';
import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "../src/components/notFound/notFound"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/teams'
        },
        {
            path: '/teams', component: TeamsList, children: [
                {
                    name:'team-members', path: ':teamId', component: TeamMembers, props: true
                },
            ]
        },
        {
            path: '/users', component: UsersList
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app');
