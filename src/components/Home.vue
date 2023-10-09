<script setup>
  import { ref } from 'vue';
  import Header from "../components/Header.vue";
  import AsideMenu from "../components/AsideMenu.vue";
  import Footer from './Footer.vue';

  let isAsideOpen = ref(false);
  
</script>

<template>
    <Header @toggle-aside="isAsideOpen = !isAsideOpen"/>
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
	}

  .logo img{
        border-radius: 50%;
        width: 50%;
    }
    .logo{
        padding-top: 70px;
        text-align: center;
        opacity: 0.4;
        
    }
    .main-content{
      margin-top: 64px;
    }
</style>