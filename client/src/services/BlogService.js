import Api from '@/services/Api'

export default {
    // get all blogs
    index() {
        return Api().get('posts')
    },

    // get by id
    show(blogId) {
        return Api().get('post/'+blogId)
    },


    // create blog
    create(blog) {
        return Api().post('post', blog)
    },


    // edit blog
    edit(blog) {
        return Api().put('post/'+blog.id, blog)
    },
    

    // delete blog
    delete(blog) {
        return Api().delete('post/'+blog.id, blog)
    }
}