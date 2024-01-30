<script setup>

</script>

<template>
    <footer>
        <div class="footer">
            <div class="footer__social-media">
                
                <div class="footer__social-media__img-whats footer__social-media__img">
                    <a href="https://wa.me/c/593961203563">
                        <img src="/whatsap-footer.png" alt="" >
                    </a>
                </div>

                <div class="footer__social-media__img-insta footer__social-media__img">
                    <a href="https://www.instagram.com/limbert_art/">
                        <img src="/instagram-footer.png" alt="" >
                    </a>
                    
                </div>
                
            </div>

            <div class="footer__info">
                <p>
                    LimbertArt Copyright © 2023 LimbertArt - All rights reserved
                </p>
                 
            </div>
        </div>
</footer>
</template>

<style lang="scss" scoped>
    
    .footer{
        background:#000;
        font-family: 'Play', sans-serif;
        width: 100%;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        &__social-media{
            opacity: 0.3;
            display: flex;
            position: absolute;
            
            &__img-insta{
                img{
                    width: 35px;
                    padding-top: 3px;
                }
            }

            &__img-whats{
                img{
                    width: 40px;
                   
                }
            }

            &__img{
                a:hover{
                    cursor: pointer;
                }
               img{
                margin: 10px;
               }
            }

        }
        &__info{
            position: relative;
            top: 80px;

            p{
                color: white;
                opacity: 0.4;
            }

        }
    }
    @media(max-width: 766px) {

        .footer{
            &__info{
                p{
                    font-size: 15px;
                }
            }
            &__social-media{

                &__img-insta{
                    img{
                        width: 25px;
                        padding-top: 3px;
                    }
                }

                &__img-whats{
                    img{
                        width: 30px;
                    
                    }
                    
                }
            }
        }
    }
    @media(max-width: 500px) {

        .footer{
            &__info{
                p{
                    width: 100%;
                }
            }
        }
    }

    @media(max-width: 483px) {

        .footer{
           padding-bottom: 30px;
        }
}

</style>