<template>
    <div>
        <h1>User Control</h1>
        <p><a href="#" v-on:click.prevent="navigateTo('user/create')">Create User</a></p>
        <p>{{num}}</p>
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            num: 10,
            users: null
        }
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async mounted() {
        this.num = 500

        this.users = (await UserService.index()).data
        console.log(JSON.stringify(this.users))
    }
}
</script>

<style scoped>

</style>