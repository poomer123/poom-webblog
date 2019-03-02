<template>
    <div>
        <h1>View Category</h1>
    <div v-if="category">
        <div>
            <p><strong>ID : </strong>{{category.id}}</p>
            <p><strong>Title : </strong>{{category.title}}</p>
            <p><strong>Description : </strong>{{category.description}}</p>
            <p><strong>Author ID : </strong>{{category.author_id}}</p>
            <p><strong>Create At : </strong>{{category.createdAt}}</p>
            <p><strong>Updated At : </strong>{{category.updatedAt}}</p>
        </div>
    </div>
    <div v-else>
        <p>Not Found Category</p>
    </div>
    </div>
</template>

<script>
import CategoryService from '@/services/CategoryService'
export default {
    data() {
        return {
            category: null
        }
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async mounted() {
        const categoryId = this.$route.params.categoryId
        this.category = (await CategoryService.show(categoryId)).data
    }
}
</script>

<style scoped>

</style>