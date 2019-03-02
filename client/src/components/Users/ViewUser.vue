<template>
    <div v-if="user">
        <h1>View User</h1>
        <div>
            <p><strong>ID : </strong>{{user.id}}</p>
            <p><strong>Name : </strong>{{user.name}}</p>
            <p><strong>Lastname : </strong>{{user.lastname}}</p>
            <p><strong>Email : </strong>{{user.email}}</p>
            <p><strong>Password : </strong>{{user.password}}</p>
            <p><strong>Create At : </strong>{{user.createdAt}}</p>
            <p><strong>Updated At : </strong>{{user.updatedAt}}</p>
            <p><a href="#" v-on:click.prevent="navigateTo('/user/'+user.id+'/edit')">Edit</a></p>
        </div>
    </div>
    <div v-else>
        <p>Not Found User</p>
    </div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async mounted() {
        const userId = this.$route.params.userId
        this.user = (await UserService.show(userId)).data
    }
}
</script>

<style scoped>

</style>