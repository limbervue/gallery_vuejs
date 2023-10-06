<script setup>
import { ref, onUpdated, watch } from 'vue';
import galleryData from '../data/gallery_data';

import { useRoute } from 'vue-router';

const route = useRoute();
const gallery = ref([]);

onUpdated(()=>{
    init();
});
function init(){
    gallery.value = galleryData[route.params.category];
}
init();

const enlargedImage = ref(null);

function handleImageClick(img) {
  enlargedImage.value = img;
}

function closeEnlargedImage() {
  enlargedImage.value = null;
}

</script>

<template>
    
    <div v-if="enlargedImage" class="enlarged__image__background" @click="closeEnlargedImage">
      <img :src="`/images/${enlargedImage.pictureName}`" class="enlarged__image" @click.stop>
    </div>

    <div v-if="gallery && gallery.imagesBn">
        <ul >
            <div class="image">
                <li v-for="img in gallery.imagesBn" :key="img.id">
                    <img :src="`/images/${img.pictureName}`" width="200" @click="handleImageClick(img)">
                </li>
            </div>
            
            
        </ul>
    </div>

    <div v-if="gallery && gallery.imagesColor">
      <ul>
        <div class="image image_color">
          <li v-for="img in gallery.imagesColor" :key="img.id">
            <img :src="`/images/${img.pictureName}`" width="200" @click="handleImageClick(img)">
          </li>
        </div>
      </ul>
    </div>
    

</template>

<style lang="scss" scoped>
    .image{

        list-style: none;
        display: flex;
        margin: 10px;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 30px;
        padding-top: 90px;
        justify-content: center;

    }
    .image_color{
      padding-top: 0px;
    }
    img{
        margin: 20px;
        width: 230px;
        border-radius: 10%; /* Controla la suavidad del borde */
        box-shadow: 0 0 10px rgba(29, 98, 92, 0.9);
        cursor: pointer;
    }
    
    .enlarged__image {
            
        width: 50%; /* Controla el tamaño de la imagen ampliada */
        margin-top: -80px;
        cursor: pointer; /* Cambia el cursor al hacer clic para indicar que se puede cerrar */
        
        .enlarged__image:hover {
          width: 50%;
        }

        &__background {
          position: fixed;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9); /* Fondo oscuro semitransparente */
          display: flex;
          justify-content: center;
          align-items: center;
          left: 0;
          padding-top: 80px;
        }
       
    }
</style>