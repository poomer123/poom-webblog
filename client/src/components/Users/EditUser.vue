<template>
    <div>
        <h1>Edit User</h1>
        <form v-on:submit.prevent="editUser">
            <p>Name : <input type="text" v-model="user.name"></p>
            <p>Lastname : <input type="text" v-model="user.lastName"></p>
            <p>Email : <input type="email" v-model="user.email"></p>
            <p>Password : <input type="text" v-model="user.password"></p>
            <button type="submit">Submit Edit</button>
        </form>
    </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
    data() {
        return {
            user: {
                id: 0,
                name: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async editUser() {
            try {
                await UserService.edit(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
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