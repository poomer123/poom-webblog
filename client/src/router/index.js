import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// User
import Users from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserView from '@/components/Users/ViewUser'
import UserLogin from '@/components/Users/LoginUser'

// Category
import Categories from '@/components/Category/Index'
import CategoryCreate from '@/components/Category/CreateCategory'
import CategoryEdit from '@/components/Category/EditCategory'
import CategoryView from '@/components/Category/ViewCategory'

// Blog Post
import Blogs from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogView from '@/components/Blogs/ViewBlog'

// upload
import Upload from '@/components/Utils/Upload'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // upload
        {
            path: '/upload',
            name: 'upload',
            component: Upload
        },

        // authentication
        {
            path: '/login',
            name: 'login',
            component: UserLogin
        },

        // home
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
            path: '/user/:userId/edit',
            name: 'user-edit',
            component: UserEdit
        },
        {
            path: '/user/:userId/view/',
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
            path: '/category/:categoryId/edit',
            name: 'category-edit',
            component: CategoryEdit
        },
        {
            path: '/category/:categoryId/view',
            name: 'category-view',
            component: CategoryView
        },

        // blog post
        {
            path: '/blogs',
            name: 'blogs',
            component: Blogs
        },
        {
            path: '/blog/create',
            name: 'blog-create',
            component: BlogCreate
        },
        {
            path: '/blog/:blogId/edit',
            name: 'blog-edit',
            component: BlogEdit
        },
        {
            path: '/blog/:blogId/view',
            name: 'blog-view',
            component: BlogView
        },
    ]
})
