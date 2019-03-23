import Api from '@/services/Api'

export default {
    // upload file
    upload(formData) {
        return Api().post('upload', formData)
    },
    delete(picture) {
        return Api().post('/upload/delete', picture)
    }
}