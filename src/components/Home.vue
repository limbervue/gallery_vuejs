<script setup>
    import { ref, onMounted, onUpdated, watch } from 'vue';
    import Header from "../components/Header.vue";
    import HeaderMobile from "../components/HeaderMobile.vue";
    import AsideMenu from "../components/AsideMenu.vue";
    import AsideMenuMobile from '../components/AsideMenuMobile.vue';
    import Footer from './Footer.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const max950 = ref(window.innerWidth > 766);
    const min950 = ref(window.innerWidth <= 766);
    let isAsideOpen = ref(false);
    let isAsideOpen1 = ref(false);
    let isAsideOpen2 = ref(false);
    let menuToggle = ref(true);
    let menuEquis = ref(false);
    let menuToggle1 = ref(true);
    let menuEquis1 = ref(false);
    let menuToggle2 = ref(true);
    let menuEquis2 = ref(false);
    
    onUpdated(()=>{
        
        if(window.innerWidth > 766){
        inner.value = true
        }else{
            inner.value = false
        }    
        
    });
    const inner = ref(false)
    
    const handleResize = () => {
        max950.value = window.innerWidth > 766;
        min950.value = window.innerWidth <= 766;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize); 
    });
    function handleToggleAside() {
     
      menuToggle.value = !menuToggle.value;
      menuEquis.value = !menuEquis.value;
      
    }

    function handleToggleAside1() {
     
     menuToggle1.value = !menuToggle1.value;
     menuEquis1.value = !menuEquis1.value;
     
   }

   function handleToggleAside2() {
     
     menuToggle2.value = !menuToggle2.value;
     menuEquis2.value = !menuEquis2.value;
     
   }

</script>

<template>
    <Header v-if="max950" @toggle-aside="isAsideOpen = !isAsideOpen, handleToggleAside()" :menu-toggle="menuToggle" :menu-equis="menuEquis" />

    <HeaderMobile v-if="min950"  @toggle-aside1="isAsideOpen1 = !isAsideOpen1, isAsideOpen2 = false, handleToggleAside1()" @toggle-aside2="isAsideOpen2 = !isAsideOpen2, isAsideOpen1 = false, handleToggleAside2()" :menu-toggle1="menuToggle1" :menu-equis1="menuEquis1" :menu-toggle2="menuToggle2" :menu-equis2="menuEquis2"/>

    <!-- ----------------------------------------ASIDE-MENU ------------------------------------------------------------------->
    <AsideMenu v-if="max950" @close-aside="isAsideOpen = false, handleToggleAside()" :show-aside-menu="isAsideOpen" :menu-toggle="menuToggle" :menu-equis="menuEquis" />

    <AsideMenuMobile v-if="min950" @close-aside1="isAsideOpen1 = false, handleToggleAside1()" @close-aside2="isAsideOpen2 = false, handleToggleAside2()" :show-aside-menu1="isAsideOpen1" :show-aside-menu2="isAsideOpen2" :menu-toggle1="menuToggle1" :menu-equis1="menuEquis1" :menu-toggle2="menuToggle2" :menu-equis2="menuEquis2"  />

    <main class="main-content">

        <section v-if="route.name == 'root'" class="container">
            <article class="welcome" >
                
                <p>¡Bienvenido a mi Galleria de Arte LimbertArt, donde las expresiones artísticas cobran vida! Soy Limbert, tu anfitrión desde Ecuador, y estoy emocionado de presentarte una variedad de retratos.
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
        max-width: 100%;
        text-align: center;
    }
  
    a{
        text-decoration: none;
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
        color: white;
        position: relative;
        top: -72px;
        z-index: 4;
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