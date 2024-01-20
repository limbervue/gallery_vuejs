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
    let isAsideOpen = ref(false);
    let isAsideOpen1 = ref(false);
    let isAsideOpen2 = ref(false);
</script>

<template>
    <Header v-if="max950" @toggle-aside="isAsideOpen = !isAsideOpen"/>
    <HeaderMobile v-if="min950"  @toggle-aside1="isAsideOpen1 = !isAsideOpen1" @toggle-aside2="isAsideOpen2 = !isAsideOpen2" />

    <AsideMenu v-if="max950" @close-aside="isAsideOpen = false" :show-aside-menu="isAsideOpen" />
    <AsideMenuMobile v-if="min950" @close-aside1="isAsideOpen1 = false" :show-aside-menu1="isAsideOpen1" @close-aside2="isAsideOpen2 = false" :show-aside-menu2="isAsideOpen2" />

    <div class="container">
        <section class="global">
            
            <div class="contacto">
                
                <br>
                <div class="imagenes">
                    <div class="content_img img_whats">
                        <img src="../../public/images/whatsapp.png">
                        <p><a href="https://wa.me/c/593961203563" target="_blank">0961203563</a></p>
                    </div>

                    <div class="content_img img_insta">
                        <img src="../../public/images/instagram.png">
                        <p><a href="https://www.instagram.com/limbert_art/" target="_blank">Limbert_art</a></p> 
                    </div>
                </div>

            </div>
        </section>
    </div>

    <router-view></router-view>
</template>

<style lang="scss" scoped>
    
    .global .contacto{
        font-family: Helvetica,Arial;
        width: 60%;
        text-align: justify;
        float: none;
        margin-right: 40px;
        margin-left: 45px;
        display: flex;
        padding-bottom: 100px;
        
    }
    /*///////////////////////////TITULO*/
    

    /*/////////////////////////PARRAFO */
    .contacto p{
        font-family: Helvetica, Arial;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 1px;
        cursor: pointer;
    }
    .contacto p a{
        color: antiquewhite;
    }
    .contacto img{
        width: 60px;
        text-align: left;
        margin-bottom: 10px;
    }
    
    .content_img{
        padding-bottom: 80px;
    }
    .imagenes{
        text-align: center;
    }
    
    .global{
        max-width: 100%;
        width: 100%;
    }

    @media (max-width: 1890px) {
        .imagenes{
            margin-top: -280px;
        }
        .container{
            padding-top: 264px;
            height: 100vh;
        }
    }


    @media (max-width: 766px) {
        
        .container{
            padding-top: 694px;
        }

    }

    @media (max-width: 509px) {
        
        .img_insta{
            position: relative;
            top: -197px;
        }
        .img_whats{
            position: relative;
            top: -176px;
        }
        .imagenes img{
            width: 50px;
        }

    }

    @media (max-width: 395px) {
        .container{
            height: 100%;
        }
    }
</style>