<template>
    <div>
        <h1>Category Control</h1>
        <p><a href="#" v-on:click.prevent="navigateTo('category/create')">Create New Category</a></p>
        <div v-for="category in categories" :key="category.id">
            <p><strong>Title : </strong> {{category.title}}</p>
            <p><strong>Description : </strong> {{category.description}}</p>
            <p><strong>Author : </strong> {{category.author_id}}</p>
            <button v-on:click="navigateTo('/category/'+category.id+'/view/')">View Category</button>
            <button v-on:click="deleteCategory(category)">Delete</button>
            <hr />
        </div>
    </div>
</template>

<script>
import CategoryService from '@/services/CategoryService'

export default {
    data() {
        return {
            categories: null
        }
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        },
        async deleteCategory(category) {
            try {
                await CategoryService.delete(category)
                this.refreshData()
            } catch (err) {
                console.log(err)
            }   
        },
        async refreshData() {
            this.categories = (await CategoryService.index()).data
        }
    },
    async mounted() {
        this.categories = (await CategoryService.index()).data
    }
}
</script>

<style scoped>

</style>