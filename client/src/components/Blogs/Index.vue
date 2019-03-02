<template>
    <div>
        <h1>Blog Control</h1>
        <p><button v-on:click.prevent="navigateTo('/blog/create')">New Blog</button></p>

        <div v-for="blog in blogs" :key="blog.id">
            <p><strong>Title : </strong> {{blog.title || '-'}}</p>
            <p><strong>Description : </strong> {{blog.description || '-'}}</p>
            <p><strong>Category Id : </strong> {{blog.category_id || '-'}}</p>
            <p><strong>Author Id : </strong> {{blog.author_id || '-'}}</p>
            <p><strong>tatus Id : </strong> {{blog.status_id || '-'}}</p>
            <p><strong>createdAt : </strong> {{blog.createdAt || '-'}}</p>
            <button v-on:click="navigateTo('/blog/'+blog.id+'/view/')">View User</button>
            <button v-on:click="deleteBlog(blog)">Delete</button>
            <hr />
        </div>
    </div>
</template>

<script>

import BlogService from '@/services/BlogService'

export default {
    data() {
        return {
            blogs: null
        }
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        },
        async deleteBlog(blog) {
            try {
                await BlogService.delete(blog)
                this.refreshData()
            } catch (err) {
                console.log(err)
            }   
        },
        async refreshData() {
            this.blogs = (await BlogService.index()).data
        }
    },
    async mounted() {
        this.blogs = (await BlogService.index()).data
    }
}
</script>

<style scoped>

</style>