import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// User
import Users from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserView from '@/components/Users/ViewUser'

// Category
import Categories from '@/components/Category/Index'
import CategoryCreate from '@/components/Category/CreateCategory'
import CategoryEdit from '@/components/Category/EditCategory'
import CategoryView from '@/components/Category/ViewCategory'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },

        // user
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/user/create',
            name: 'user-create',
            component: UserCreate
        },
        {
            path: '/user/edit',
            name: 'user-edit',
            component: UserEdit
        },
        {
            path: '/user/view',
            name: 'user-view',
            component: UserView
        },

        // category
        {
            path: '/categories',
            name: 'categories',
            component: Categories
        },
        {
            path: '/category/create',
            name: 'category-create',
            component: CategoryCreate
        },
        {
            path: '/category/edit',
            name: 'category-edit',
            component: CategoryEdit
        },
        {
            path: '/category/view',
            name: 'category-view',
            component: CategoryView
        },
    ]
})
