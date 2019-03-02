<template>
    <div>
        <h1>Blog Control</h1>
                <p><button v-on:click.prevent="navigateTo('/blog/create')">New Blog</button></p>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>

</style>