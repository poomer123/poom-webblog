<template>
    <div>
        <h3>Back Office Header</h3>
        <Nav>
            <ul>
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'users'}">User</router-link></li>
                <li><router-link :to="{name: 'categories'}">Category</router-link></li>
            </ul>
        </Nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>