<template>
    <div>
        <h1>View Blog</h1>
        <div v-if="blog">
            <p><strong>id : </strong>{{blog.id}}</p>
            <p><strong>Title : </strong>{{blog.title}}</p>
            <div>
                <strong>Description : </strong>
                <div v-html="blog.description"></div>
            </div>
            <p><strong>Category Id : </strong>{{blog.category_id}}</p>
            <p><strong>Status Id : </strong>{{blog.status_id}}</p>
            <p><strong>Author Id : </strong>{{blog.author_id}}</p>
            <p><strong>Created At : </strong>{{blog.createdAt}}</p>
            <p><strong>Updated At : </strong>{{blog.updatedAt}}</p>
            <p><a href="#" v-on:click.prevent="navigateTo('/blog/'+blog.id+'/edit')">Edit</a></p>
        </div>
        <div v-else>
            <p>Not Found Blog</p>
        </div>
    </div>
</template>

<script>
import BlogService from '@/services/BlogService'
export default {
    data() {
        return {
            blog: null
        }
    },
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async mounted() {
        const blogId = this.$route.params.blogId
        this.blog = (await BlogService.show(blogId)).data
    }
}
</script>

<style scoped>

</style>