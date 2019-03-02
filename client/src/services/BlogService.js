import Api from '@/services/Api'

export default {
    // get all blogs
    index() {
        return Api().get('blogs')
    },

    // get by id
    show(blogId) {
        return Api().get('blog/'+blogId)
    },


    // create blog
    create(blog) {
        return Api().post('blog', blog)
    },


    // edit blog
    edit(blog) {
        return Api().put('blog/'+blog.id, blog)
    },
    

    // delete blog
    delete(blog) {
        return Api().delete('blog/'+blog.id, blog)
    }
}