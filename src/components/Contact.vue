<script setup>
   
</script>

<template>
    <section class="contact-container">
        <div class="contact-container__content-images">

            <div class="contact-container__content-images__whatsapp contact-container__content-images__image">

                <img  class="contact-container__content-images__whatsapp__img" src="../../public/images/whatsapp.png">
                <p>
                    <a href="https://wa.me/c/593961203563" target="_blank">0961203563</a>
                </p>
            </div>

            <div class="contact-container__content-images__instagram contact-container__content-images__image">

                <img class="contact-container__content-images__instagram__img" src="../../public/images/instagram.png">
                <p>
                    <a href="https://www.instagram.com/limbert_art/" target="_blank">Limbert_art</a>
                </p> 
            </div>
        </div>
        
               
    </section>
    


    <router-view></router-view>
</template>

<style lang="scss" scoped>
    
    .contact-container{
        display: flex;
        flex-wrap: wrap;
        height: 750px;

        &__content-images{
            position: relative;
            top: 150px;
            left: 40px;

            &__image img{
                width: 60px;
            }
            &__image p{
                margin-top: 15px;
                a{
                    color: white;
                }
            }

            &__whatsapp{
                margin-bottom: 120px;

            }

        }
    }
    @media (max-width: 891px) {
        .contact-container{
            margin-bottom: 10px;
        }
        
        
    }

    @media(max-width: 766px) {
        .contact-container__content-images{
            top: 250px;
        }
        .contact-container__content-images__image img{
            width: 50px;
        }
        .contact-container{
            margin-bottom: 130px;
        }
    }

    @media (max-width: 412px) {
        .contact-container{
            margin-bottom: 120px;
        }
        
        
    }
    
</style>