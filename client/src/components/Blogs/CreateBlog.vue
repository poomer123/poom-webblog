<template>
    <div>
        <h1>Create Blog</h1>
        <form v-on:submit.prevent="createBlog">
            <p>Title : <input type="text" v-model="blog.title"></p>
            <p>Description : <input type="text" v-model="blog.description"></p>
            <p>Category Id : <input type="number" v-model="blog.category_id"></p>
            <p>Author Id : <input type="number" v-model="blog.author_id"></p>
            <p>Status Id : <input type="number" v-model="blog.status_id"></p>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import BlogService from '@/services/BlogService'
export default {
    data() {
        return {
            blog: {
                title: '',
                description: '',
                category_id: '',
                author_id: '',
                status_id: ''
            }
        }
    },
    methods: {
        async createBlog() {
            try {
                await BlogService.create(this.blog)
                this.$router.push({
                    name: 'blogs'
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