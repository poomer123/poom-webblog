<template>
    <div>
        <h1>Category Control</h1>
        <p><a href="#" v-on:click.prevent="navigateTo('category/create')">Create New Category</a></p>
    </div>
</template>

<script>
import CategoryService from '@/services/CategoryService'

export default {
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async mounted() {
        this.category = (await CategoryService.index()).data
        console.log(JSON.stringify(this.category))
    }
}
</script>

<style scoped>

</style>