import Api from '@/services/Api'

export default {
    // get all categories
    index() {
        return Api().get('categories')
    },

    // get by id
    show(categoryId) {
        return Api().get('category/'+categoryId)
    },


    // create category
    create(category) {
        return Api().post('category', category)
    },


    // edit
    edit(category) {
        return Api().put('category/'+category.id, category)
    },
    

    // delete
    delete(category) {
        return Api().delete('category/'+category.id, category)
    }
}