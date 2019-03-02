<template>
    <div>
        <h1>Create New Category</h1>
        <form v-on:submit.prevent="createCategory">
            <p>
                <label>Category Title : </label><input type="text" v-model="category.title">
            </p>
            <p>
                <label>Category Description : </label><input type="text" v-model="category.description">
            </p>
            <p>
                <label>Author ID: </label><input type="number" v-model="category.author_id">
            </p>
            <button type="submit">Create Category</button>
        </form>
    </div>
</template>

<script>
import CategoryService from '@/services/CategoryService'
export default {
    data() {
        return {
            category: {
                title: '',
                description: '',
                author_id: ''
            }
        }
    },
    methods: {
        async createCategory() {
            try {
                await CategoryService.create(this.category)
                this.$router.push({
                    name: 'categories'
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