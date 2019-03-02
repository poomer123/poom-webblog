import Api from '@/services/Api'

export default {
    // get all users
    index() {
        return Api().get('users')
    },

    // get by id
    show(userId) {
        return Api().get('user/'+userId)
    },


    // create user
    create(user) {
        return Api().post('user', user)
    },


    // edit
    edit(user) {
        return Api().put('user/'+user.id, user)
    },
    

    // delete
    delete(user) {
        return Api().delete('user/'+user.id, user)
    }
}