<script setup>
    import { ref, onMounted} from 'vue';
    import Header from "../components/Header.vue";
    import HeaderMobile from "../components/HeaderMobile.vue";
    import AsideMenu from "../components/AsideMenu.vue";
    import Footer from './Footer.vue';

    const max950 = ref(window.innerWidth > 766);
    const min950 = ref(window.innerWidth <= 766);
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

    <AsideMenu :show-aside-menu="isAsideOpen" />
    <main class="main-content">
      <div class="logo" v-show="$route.name=='root'">
        <img src="@/assets/images/mod-art.jpeg" >
      </div>
      <router-view />
    </main>
    <Footer/>
</template>
  
<style >

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
  }
  
  body{
		background-color: rgb(9, 55, 54);
		background-repeat: no-repeat;
		opacity: 0.9;
        margin:0;
        overflow-x:hidden;
        height: 100%;
	}
    

    .logo img{
        border-radius: 50%;
        width: 800px;
    }
    .logo{
        padding-top: 70px;
        text-align: center;
        opacity: 0.4;
        
    }

    .main-content{
      margin-top: 64px;
     
    }


    @media (max-width: 1880px) {
        .logo{
            position: relative;
            top: -140px;
            left: -43px;
        }
    }

    @media (max-width: 766px) {
        .logo img{
          width: 110%;
        }

    }    

    @media (max-width: 568px) {

        .logo{
            top: -217px;
        }
    }    

    @media (max-width: 514px) {

        .logo{
            left: -26px;
        }
    }    

    @media (max-width: 396px) {

        .logo{
            top: 40px;
        }
    }  

</style>