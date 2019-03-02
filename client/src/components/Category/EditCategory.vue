<template>
    <div>
        <h1>Edit Category</h1>
        <form v-on:submit.prevent="editCategory">
            <p><strong>Title : </strong><input type="text" v-model="category.title"></p>
            <p><strong>Description : </strong><input type="text" v-model="category.description"></p>
            <p><strong>Author Id : </strong><input type="number" v-model="category.author_id"></p>
            <button type="submit">Save Category</button>
        </form>
    </div>
</template>

<script>
import CategoryService from '@/services/CategoryService'
export default {
    data() {
        return {
            category: {
                id: 0,
                title: '',
                description: '',
                author_id: ''
            }
        }
    },
    methods: {
        async editCategory() {
            try {
                await CategoryService.edit(this.category)
                this.$router.push({
                    name: 'categories'
                })
            } catch (err) {
                console.log(err)
            }
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