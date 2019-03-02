<template>
    <div>
        <h1>User Control</h1>
        <p><a href="#" v-on:click.prevent="navigateTo('/user/create')">Create User</a></p>
        <div v-for="user in users" :key="user.id">
            <p><strong>name : </strong> {{user.name || '-'}}</p>
            <p><strong>lastName : </strong> {{user.lastName || '-'}}</p>
            <p><strong>email : </strong> {{user.email || '-'}}</p>
            <p><strong>createdAt : </strong> {{user.createdAt || '-'}}</p>
            <button v-on:click="navigateTo('/user/'+user.id+'/view/')">View User</button>
            <button v-on:click="deleteUser(user)">Delete User</button>
            <hr />
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            users: null
        }
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        },
        async deleteUser(user) {
            try {
                await UserService.delete(user)
                this.refreshData()
            } catch (err) {
                console.log(err)
            }   
        },
        async refreshData() {
            this.users = (await UserService.index()).data
        }
    },
    async mounted() {
        this.users = (await UserService.index()).data
    }
}
</script>

<style scoped>

</style>