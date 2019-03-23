<template>
    <div>
        <h1>Create Blog</h1>
        <form v-on:submit.prevent="createBlog">
            <p>Title : <input type="text" v-model="blog.title"></p>
            <!-- <p>Description : <input type="text" v-model="blog.description"></p> -->
            <p>Category Id : <input type="number" v-model="blog.category_id"></p>
            <p>Author Id : <input type="number" v-model="blog.author_id"></p>
            <p>Status Id : <input type="number" v-model="blog.status_id"></p>
            <button type="submit">Submit</button>
        </form>
        <p><strong>content: </strong></p>
        <p><vue-ckeditor v-model.lazy="blog.description" :config="config" @blur="onBlur($event)" @focus="onFocus($event)" /></p>
    </div>
</template>

<script>
import BlogService from '@/services/BlogService'
import VueCkeditor from 'vue-ckeditor2'
export default {
    data() {
        return {
            blog: {
                title: '',
                description: '',
                category_id: '',
                author_id: '',
                status_id: ''
            },
            config: {
                toolbar: [
                    ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript"]
                ],
                height: 300
            }
        }
    },
    methods: {
        async createBlog() {
            try {
                await BlogService.create(this.blog)
                this.$router.push({
                    name: 'blogs'
                })
            } catch (err) {
                console.log(err)
            }
        },
        onBlur(editor) {
            console.log(editor)
        },
        onFocus(editor) {
            console.log(editor)
        },
    },
    components: {
        VueCkeditor
    },
    created() {
        this.config.toolbar = [
        {
            name: "document",
            items: [
            "Source",
            "-",
            "Save",
            "NewPage",
            "Preview",
            "Print",
            "-",
            "Templates"
            ]
        },
        {
            name: "clipboard",
            items: [
            "Cut",
            "Copy",
            "Paste",
            "PasteText",
            "PasteFromWord",
            "-",
            "Undo",
            "Redo"
            ]
        },
        {
            name: "editing",
            items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"]
        },
        {
            name: "forms",
            items: [
            "Form",
            "Checkbox",
            "Radio",
            "TextField",
            "Textarea",
            "Select",
            "Button",
            "ImageButton",
            "HiddenField"
            ]
        },
        "/",
        {
            name: "basicstyles",
            items: [
            "Bold",
            "Italic",
            "Underline",
            "Strike",
            "Subscript",
            "Superscript",
            "-",
            "CopyFormatting",
            "RemoveFormat"
            ]
        },
        {
            name: "paragraph",
            items: [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "-",
            "Blockquote",
            "CreateDiv",
            "-",
            "JustifyLeft",
            "JustifyCenter",
            "JustifyRight",
            "JustifyBlock",
            "-",
            "BidiLtr",
            "BidiRtl",
            "Language"
            ]
        },
        { name: "links", items: ["Link", "Unlink", "Anchor"] },
        {
            name: "insert",
            items: [
            "Image",
            "Flash",
            "Table",
            "HorizontalRule",
            "Smiley",
            "SpecialChar",
            "PageBreak",
            "Iframe",
            "InsertPre"
            ]
        },
        "/",
        { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
        { name: "colors", items: ["TextColor", "BGColor"] },
        { name: "tools", items: ["Maximize", "ShowBlocks"] },
        { name: "about", items: ["About"] } 
        ]
    } 
}
</script>

<style scoped>

</style>