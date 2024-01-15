<script setup>
    import Header from '../components/Header.vue'
    import AsideMenu from '../components/AsideMenu.vue'
    import { ref,onMounted } from 'vue';

    const max950 = ref(window.innerWidth > 766);
    const min950 = ref(window.innerWidth < 766);
    
    const handleResize = () => {
        max950.value = window.innerWidth > 766;
        min950.value = window.innerWidth < 766;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize); 
    });

    let isAsideOpen = ref(false);
</script>

<template>
    <Header v-if="max950"  @toggle-aside="isAsideOpen = !isAsideOpen" />
    <HeaderMobile v-if="min950" />
    <AsideMenu :show-aside-menu="isAsideOpen" />
    <div class="content">
      <div class="content-history">
        <p class="centered-text">
          Limbert Art es un emprendimiento que nace en el año 2020, en ese momento donde nos encontrabamos en una pandemia, que donde algunas personas veían un mal momento, ya sea por no poder salir, ver a sus amigos, etc., otras personas vieron una oportunidad para emprender, y hacer eso que siempre quisieron en la vida, que por falta de tiempo no pudieron y que ahora sí podían realizarlo. Ese fue mi caso el joven de 25 años que se animó y se aventuró a comenzar este negocio, que no lo veo como un trabajo porque me gusta mucho dibujar y pintar. En esta página encontrarás varios retratos realistas, tanto de clientes como dibujos que he realizado a lo largo de mi vida. Encontrarás diferentes tipos de retratos como: De personas, animales, entre otros.
        </p>
      </div>
      <div class="img-roca">
        <img src="../../public/images/roca.jpeg">
      </div>
    </div>
    <router-view></router-view>
  </template>
  
  <style scoped>
  
    .centered-text {
      
      color: white;
      width: 50%;
      text-align: justify;
      margin: 0 auto; /* Centrar horizontalmente */
      padding-bottom: 30px;
      line-height: 1.5;
    }
    .img-roca img {
      width: 40%;
      opacity: 0.7;
      border-radius: 5%;
      
    }
    
    .content {
        text-align: center;
        padding-bottom: 170px;
        width: 70%;
        margin: -70px auto 0;
        
    }
    .content-history{
        padding-bottom: 30px;
    }

    @media (max-width: 1340px) {
        .centered-text{
            width: 70%;
        }
        
        .img-roca img{
            width: 60%;
        }
    }
    @media (max-width: 1179px) {
        .centered-text{
            width: 80%;
        } 
    }

    @media (max-width: 766px) {

        .centered-text{
            width: 90%;
        }
        .content{
            padding-top: 284px;
            height: 100vh;
        }
    }

    @media (max-width: 647px) {
        .img-roca img{
            width: 85%;
        }
    }

    @media (max-width: 484px) {
        
        .centered-text{
            width: 90%;
        }

        .img-roca img{
            width: 90%;
        }
        .content{
            padding-top: 217px;
        }
    }

    @media (max-width: 388px) {
        .content{
            height: 100%;
        }
    }
    
  </style>
    