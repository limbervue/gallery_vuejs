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
    let isAsideOpenCategory = ref(false);
    let isAsideOpenRetratos = ref(false);
    let menuToggle = ref(true);
    let menuEquis = ref(false);
    let menuToggleCategory = ref(true);
    let menuEquisCategory = ref(false);
    let menuToggleRetratos = ref(true);
    let menuEquisRetratos = ref(false);
    
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

    function handleToggleAsideCategory() {
     
        menuToggleCategory.value = !menuToggleCategory.value;
        menuEquisCategory.value = !menuEquisCategory.value;
        
        if (menuEquisRetratos.value && !menuToggleRetratos.value && menuEquisCategory.value && !menuToggleCategory.value  ) {
            menuEquisRetratos.value = false;
            menuToggleRetratos.value = true;
        }
        
    }

   function handleToggleAsideRetratos() {
     
    menuToggleRetratos.value = !menuToggleRetratos.value;
    menuEquisRetratos.value = !menuEquisRetratos.value;
    
    if (menuEquisCategory.value && !menuToggleCategory.value && menuEquisRetratos.value && !menuToggleRetratos.value) {
        menuEquisCategory.value = false;
        menuToggleCategory.value = true;
    }
        
    }

</script>

<template>
    <Header v-if="max950" @toggle-aside="isAsideOpen = !isAsideOpen, handleToggleAside()" :menu-toggle="menuToggle" :menu-equis="menuEquis" />

    <HeaderMobile v-if="min950"  @toggle-aside-category="isAsideOpenCategory = !isAsideOpenCategory, isAsideOpenRetratos = false, handleToggleAsideCategory()" @toggle-aside-retratos="isAsideOpenRetratos = !isAsideOpenRetratos, isAsideOpenCategory = false, handleToggleAsideRetratos()" :menu-toggle-category="menuToggleCategory" :menu-equis-category="menuEquisCategory" :menu-toggle-retratos="menuToggleRetratos" :menu-equis-retratos="menuEquisRetratos"/>

    <!-- ----------------------------------------ASIDE-MENU ------------------------------------------------------------------->
    <AsideMenu v-if="max950" @close-aside="isAsideOpen = false, handleToggleAside()" :show-aside-menu="isAsideOpen" :menu-toggle="menuToggle" :menu-equis="menuEquis" />

    <AsideMenuMobile v-if="min950" @close-aside-category="isAsideOpenCategory = false, handleToggleAsideCategory()" @close-aside-retratos="isAsideOpenRetratos = false, handleToggleAsideRetratos()" :show-aside-menu-category="isAsideOpenCategory" :show-aside-menu-retratos="isAsideOpenRetratos" :menu-toggle-category="menuToggleCategory" :menu-equis-category="menuEquisCategory" :menu-toggle-retratos="menuToggleRetratos" :menu-equis-retratos="menuEquisRetratos"  />

    <main class="main-content">

        <section v-if="route.name == 'root'" class="history-content">
            <article class="history-content__welcome" >
                
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
        background-size: cover;
        
	}
    .history-content{
        
        &__welcome{
            margin-top: 175px;
            
            p{
                width: 400px;
                height: 582px;
                margin: 0 auto;
                font-size: 28px;
                color: white;
                position: relative;
                top: -72px;
                z-index: 4;
                line-height: 1.5;
            }

        }
    }
    
    @media(max-width: 1880px) {

        .history-content{

            &__welcome p{
                height: 750px;
            }
        }
        

    }
   
    @media(max-width: 766px) {
        
        .history-content{

            &__welcome p{
                font-size: 24px;
                position: relative;
                top: 130px;
                width: 350px;
            }
        }
       
    }

    @media(max-width: 488px) {
        
        .history-content{
            &__welcome p{
                width: 70%;
                font-size: 20px;
                position: relative;
            } 
        }
    }
    
</style>