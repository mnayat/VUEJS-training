import User from "./components/user/User.vue";
import UserList from "./components/user/Userlist.vue";
import UserDetails from "./components/user/UserDetail.vue";
import Home from "./components/Home.vue"; 

export const routes = [
   
    {
        path: '/',
        component:  Home
    },
    {

        path: '/user',
        component:  User,
        children:[
           {
                path: '',
                component: UserList
           },
           {
            path: ':id',
            component: UserDetails
           }
        ]
    },
    
]