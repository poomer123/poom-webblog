<template>
    <div>
<<<<<<< HEAD
        <h1>Create User</h1>
=======
        <h1>Create New User</h1>
        <form v-on:submit.prevent="createUser">
            <p>Name : <input type="text" v-model="user.name"></p>
            <p>Lastname : <input type="text" v-model="user.lastName"></p>
            <p>Email : <input type="email" v-model="user.email"></p>
            <p>Password : <input type="text" v-model="user.password"></p>
            <button type="submit">Submit</button>
        </form>
>>>>>>> f786a5d797c9e7e1b6bfec2c5e6ec6b6506e4be7
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            user: {
                name: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async createUser() {
            try {
                await UserService.create(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>