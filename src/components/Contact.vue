<script setup>
    import Header from '../components/Header.vue'
    import AsideMenu from '../components/AsideMenu.vue'
    import { ref } from 'vue';

    let isAsideOpen = ref(false);
</script>

<template>
    <Header @toggle-aside="isAsideOpen = !isAsideOpen" />
    <AsideMenu :show-aside-menu="isAsideOpen" />
    <div class="container">
        <section class="global">
            
            <div class="contacto">
                
                <br>
                <div class="imagenes">
                    <div class="content_img">
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
        margin-left: 25px;
        display: flex;
        padding-bottom: 100px;
        padding-top: 100px;
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
</style>