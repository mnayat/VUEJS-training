<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <!-- <li class="list-group-item" style="cursor: pointer">User 1</li>
            <li class="list-group-item" style="cursor: pointer">User 2</li>
            <li class="list-group-item" style="cursor: pointer">User 3</li> -->
             <li v-for="user in users"  :key= "user.id" class="list-group-item" style="cursor: pointer">
                <router-link :to="'/user/' + user.id" > {{user.id}} </router-link> 
             </li>
        </ul>
    </div>
</template>

<script>
  import { getUsers } from "../../helpers/user-helper";


export default {
    data(){
        return {
             users: getUsers()
        }
    }
}
</script>