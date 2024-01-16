<script setup>
    import { ref, onMounted, onUpdated, watch } from 'vue';
    import Header from "../components/Header.vue";
    import HeaderMobile from "../components/HeaderMobile.vue";
    import AsideMenu from "../components/AsideMenu.vue";
    import Footer from './Footer.vue';

    import CatalogoFotos from '../data/gallery_data';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const personales = ref([]);
    const parejas = ref([]);
    const familiares = ref([]);
    const perros = ref([]);
    const aves = ref([]);

    const enlargedImage = ref(null);

    let hovered = ref(null);

    const max950 = ref(window.innerWidth > 766);
    const min950 = ref(window.innerWidth <= 766);

    const home = ref(false);
    
    onUpdated(()=>{
        
            
        if(route.name == "root"){
            home.value = true;
        }
        
        init();
        
        if(window.innerWidth > 766){
        inner.value = true
        }else{
            inner.value = false
        }    

    });


    function init(){
        personales.value = CatalogoFotos.personales;
        parejas.value = CatalogoFotos.pareja
        familiares.value = CatalogoFotos.familiares
        perros.value = CatalogoFotos.perros
        aves.value = CatalogoFotos.aves
        
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
    // Función para actualizar el valor de width852 cuando cambia el tamaño de la ventana
    const handleResize = () => {
        max950.value = window.innerWidth > 766;
        min950.value = window.innerWidth <= 766;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize); // Agregar el listener al cargar el componente
    });
    let isAsideOpen = ref(false);
    
    console.log( import.meta.env.BASE_URL);
    


</script>

<template>
    <Header v-if="max950" @toggle-aside="isAsideOpen = !isAsideOpen"/>
    <HeaderMobile v-if="min950" />

    <AsideMenu @close-aside="isAsideOpen = false" :show-aside-menu="isAsideOpen" />
    <main class="main-content">
        <div v-if="enlargedImage" class="enlarged__image__background" @click="closeEnlargedImage">
            <span class="span">X</span>
            <img :src="`images/${enlargedImage.pictureName}`" class="enlarged__image" @click.stop>
        </div>

        <section v-if="route.name == 'root'" class="container">
            <article class="welcome" >
                
                <p>¡Bienvenido a mi Galleria de Arte LimbertArt, donde las expresiones artísticas cobran vida! 🎨 Soy Limbert, tu anfitrión desde Ecuador, y estoy emocionado de presentarte una variedad de retratos.

                 Cada dibujo es una obra de arte que busca transmitir emociones y que capturan la esencia única de cada ser.</p>
            </article>
        </section>
      <router-view />
    </main>
    <Footer/>
</template>
  
<style lang="scss" setup>

@import url('https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates|Poppins&display=swap');
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat Alternates', sans-serif;
	}
  
  #app{
    padding: 0;
    width: 100%;
    max-width: 100%;
    
  }
  

  body{
		background: url("/fondo_pagina.jpeg");
		background-repeat: no-repeat;
		opacity: 0.9;
        margin:0;
        overflow-x:hidden;
        height: 100%;
	}
    
    .welcome{
        margin-top: 175px;
        
    }
    .welcome p{
        width: 400px;
        height: 582px;
        margin: 0 auto;
        font-size: 28px;
        position: relative;
        top: -72px;
    }
    @media(max-width: 1880px) {

        .welcome p{
            height: 750px;
        }

    }
    @media(max-width: 1433px) {

        .welcome p{
            height: 750px;
        }

    }
    @media(max-width: 766px) {
        
        .welcome p{
            width: 400px;
            
            margin: 0 auto;
            font-size: 28px;
            position: relative;
            top: 130px;
        } 
    }

    @media(max-width: 568px) {
        
        .welcome p{
            width: 70%;
            margin: 0 auto;
            font-size: 20px;
            position: relative;
            top: 79px;
        } 
    }
    @media(max-width: 375px) {
        
        .welcome p{

            top: 45px;
        } 
    }
    @media(max-width: 348px) {
        
        .welcome p{
            
            top: 2px;
        } 
    }
</style>