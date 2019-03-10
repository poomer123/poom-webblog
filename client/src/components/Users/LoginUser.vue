<template>
    <div>
         <form v-on:submit.prevent="onLogin">
            <p>
                <label for="email">Email : </label>
                <input type="text" name="email" v-model="email">
            </p>
            <p>
                <label for="password">password : </label>
                <input type="text" name="password" v-model="password">
            </p>
            <p>
                <button type="submit">Login</button>
            </p>
         </form>
    </div>
</template>

<script>

import AuthenService from '@/services/AuthenService'

export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async onLogin() {
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password
                })
                
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)

                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>