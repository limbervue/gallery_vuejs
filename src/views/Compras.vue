<script setup>
import CatalogoFotos from "../data/gallery_data";
import { useRoute } from 'vue-router';
import { ref } from "vue";

const route = useRoute();
const currentImage = ref({ pictureName: '' });

const getCategoryImages = (category) => {
    return CatalogoFotos[category] ? CatalogoFotos[category].imagesBn.concat(CatalogoFotos[category].imagesColor) : [];
};

const findImageById = (images, id) => {
    return images.find(img => img.id === id);
};

const setImage = () => {
    const category = route.params.category;
    const id = route.params.id;
    const images = getCategoryImages(category);
    const foundImage = findImageById(images, id);
    currentImage.value = foundImage ? { pictureName: foundImage.pictureName } : { pictureName: '' };
};

setImage();
</script>

<template>
    <div class="image-container">
      <img :src="`images/${currentImage.pictureName}`" v-if="currentImage.pictureName">
      <router-link :to="`/gallery/${route.params.category}`">              
        <button class="back-button">
          Back
        </button>
      </router-link>
    </div>
  </template>
  
<style scoped>
    .image-container {
        position: relative;
    }
  
    img {
        width: 685px;
        padding: 10px;
        margin-top: 100px;
        border-radius: 5%;
    }
  
    .back-button {
        position: absolute;
        bottom: 14px;
        right: 264px;
        width: 108px;
        padding: 18px;
    }

    
</style>
