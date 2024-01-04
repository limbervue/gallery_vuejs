<script setup>
import { ref, onUpdated, watch } from 'vue';
import CatalogoFotos from '../data/gallery_data';

import { useRoute } from 'vue-router';

const route = useRoute();
const gallery = ref([]);
const enlargedImage = ref(null);


let hovered = ref(null);


onUpdated(()=>{
    init();
    if(window.innerWidth > 766){
    inner.value = true
    }else{
        inner.value = false
    }    

});


function init(){
    gallery.value = CatalogoFotos[route.params.category];
    
}
init();



function handleImageClick(img) {
  enlargedImage.value = img;
}

function closeEnlargedImage() {
  enlargedImage.value = null;
}

function showButton(id){
	hovered.value = id
}

function hideButton(){
	hovered.value = null
}
const inner = ref(false)

</script>

<template>
    
    <div v-if="enlargedImage && inner" class="enlarged__image__background" @click="closeEnlargedImage">
        <img :src="`images/${enlargedImage.pictureName}`" class="enlarged__image" @click.stop>
    </div>
    <section class="gallery-container">
        <article class="gallery-container__gallery" v-if="gallery && gallery.imagesBn" >
            <ul class="images">
                <!-- <div class="image" > -->
                    <li v-for="img in gallery.imagesBn" :key="img.id" @mouseover="showButton(img.id)" @mouseleave="hideButton(img.id)">

                        <img :src="`images/${img.pictureName}`" @click="handleImageClick(img)">

                        <div class="btn" v-if="hovered === img.id">

                            <router-link :to="`/gallery/${route.params.category}/${img.id}`">
                                <button>
                                    comprar
                                </button>
                            </router-link>

                        </div>
                        
                    </li>
                <!-- </div> -->
            </ul>
        </article>
        <article class="gallery-container__gallery" v-if="gallery && gallery.imagesColor">
            <ul class="images images-color">
                <!-- <div class="images__color"> -->
                    <li v-for="img in gallery.imagesColor" :key="img.id" @mouseover="showButton(img.id)" @mouseleave="hideButton(img.id)">

                        <img :src="`images/${img.pictureName}`" @click="handleImageClick(img)">

                        <div class="btn" v-if="hovered === img.id">

                            <router-link :to="`/gallery/${route.params.category}/${img.id}`">
                                <button>
                                    comprar
                                </button>
                            </router-link>
                            
                        </div>
                        
                    </li>
                <!-- </div> -->
            </ul>
        </article>
    </section>
    

    
    

</template>

<style lang="scss" scoped>


    .top{
        padding-top: 30px;
    }
    .images{
        list-style: none;
        display: flex;
        margin: 10px;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 30px;
        // padding-top: 170px;
        justify-content: center;
    }
    .images-color{
        margin-top: -70px;
    }
    .btn{
		position: absolute;
		z-index: 5;
		margin: 30px;
		margin-top: -250px;
		
    }
    
    .images img{
        margin: 20px;
        width: 290px;
        border-radius: 10%; /* Controla la suavidad del borde */
        box-shadow: 0 0 10px rgba(29, 98, 92, 0.9);
        cursor: pointer;
    }
    
    .enlarged__image {
            
        width: 700px; /* Controla el tamaño de la imagen ampliada */
        margin-top: -80px;
        cursor: pointer; /* Cambia el cursor al hacer clic para indicar que se puede cerrar */
        
        

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
          z-index: 9;
        }
       
    }
    @media (max-width: 1068px) {
        .images img{
            margin: 20px;
            width: 275px;
        }
    }
    @media (max-width: 1024px) {
        .images img{
            margin: 20px;
            width: 199px;
        }
    }
    @media (max-width: 796px) {
        .images img{
            margin: 20px;
            width: 155px;
        }
    }
    @media (max-width: 766px) {
        .images{
            padding-top: 188px;
        }
        .images-color{
            padding-top: 50px;
        }
    }
    @media (max-width: 664px) {
        .images img{
            margin: 13px;
            width: 125px;
        }
    }
    @media (max-width: 532px) {
        .images img{
            margin: 8px;
            width: 108px;
        }
    }
    @media (max-width: 512px) {
        .images{
            padding-top: 137px;
        }
    }
    @media (max-width: 450px) {
        .images img{
            margin: 6px;
            width: 96px;
        }
    }
    @media (max-width: 402px) {
        .images img{
            margin: 6px;
            width: 86px;
        }
    }
    @media (max-width: 372px) {
        .images img{
            margin: 5px;
            width: 74px;
        }
    }
</style>