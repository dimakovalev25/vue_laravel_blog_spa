<template>
    <Header />
    <div class="p-4">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to="{name: 'posts.index'}">Posts</router-link>
    </div>
    <router-view />
</template>

<script>
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
    },
}
</script>

<style>

</style>
