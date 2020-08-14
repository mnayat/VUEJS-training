<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <ul class="nav nav-pills">
                    <li class="nav item">
                        <router-link to="/">Home</router-link>
                         <router-link to="/user">User</router-link>
                    </li>
                </ul>
                <hr />

                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import { createUsers } from "./helpers/user-helper.js";

    export default {
        created() {
            createUsers();
        }
    }
</script>

<style>
</style>
