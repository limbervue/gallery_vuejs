<template>
    <About v-if="showAbout" />
    <Contact v-if="!showAbout" />
</template>

<script setup>
import {computed} from 'vue';
import { useRoute } from 'vue-router';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
const route = useRoute();
const showAbout = computed(()=>{
    return route.params.category == 'about'; // si es true, mostramos About, si no, Contact
});
</script>

<style lang="scss" scoped>

</style>