import Login from './components/login/LoginComponent.vue';
import Account from './components/account/PlayerInformation.vue';

import Arena from './components/battle/BattleComponent.vue';
export const routes = [
    { 
        path: '/',
        component: Login
    },
    { 
        path: '/account',
        component: Account
    },
    { 
        path: '/arena',
        component: Arena
    },

];