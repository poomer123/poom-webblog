<template>
    <div>
        <h1>View Blog</h1>
        <div v-if="blog">
            <p><strong>id : </strong>{{blog.id}}</p>
            <p><strong>Title : </strong>{{blog.title}}</p>
            <p><strong>Description : </strong>{{blog.description}}</p>
            <p><strong>Category Id : </strong>{{blog.category_id}}</p>
            <p><strong>Status Id : </strong>{{blog.status_id}}</p>
            <p><strong>Author Id : </strong>{{blog.author_id}}</p>
            <p><strong>Created At : </strong>{{blog.createdAt}}</p>
            <p><strong>Updated At : </strong>{{blog.updatedAt}}</p>
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
    async mounted() {
        const blogId = this.$route.params.blogId
        this.blog = (await BlogService.show(blogId)).data
    }
}
</script>

<style scoped>

</style>