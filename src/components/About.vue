<script setup>
    
</script>

<template>
    
    <div class="about-container">
        <div class="about-container__content-history">
            <p>
                Limbert Art es un emprendimiento que nace en el año 2020, en ese momento donde nos encontrabamos en una pandemia, que donde algunas personas veían un mal momento, ya sea por no poder salir, ver a sus amigos, etc., otras personas vieron una oportunidad para emprender, y hacer eso que siempre quisieron en la vida, que por falta de tiempo no pudieron y que ahora sí podían realizarlo. Ese fue mi caso el joven de 25 años que se animó y se aventuró a comenzar este negocio, que no lo veo como un trabajo porque me gusta mucho dibujar y pintar. En esta página encontrarás varios retratos realistas, tanto de clientes como dibujos que he realizado a lo largo de mi vida. Encontrarás diferentes tipos de retratos como: De personas, animales, entre otros.
            </p>
        </div>

        <div class="about-container__image">
            <img src="../../public/images/roca.jpeg">
        </div>

    </div>
    <router-view></router-view>
</template>
  
<style lang="scss" scoped>
    
    .about-container{
        
        text-align: center;
        padding-bottom: 170px;
        width: 70%;
        margin: -70px auto 0;
        margin-top: 100px;

        &__content-history{
            padding-bottom: 50px;

            p{
                color: white;
                width: 700px;
                text-align: justify;
                margin: 0 auto; /* Centrar horizontalmente */
                padding-bottom: 30px;
                line-height: 1.5;
                font-size: 18px;
            }
        }
        &__image{
            img{
                width: 50%;
                opacity: 0.7;
                border-radius: 5%;
            }
        }
    }    

    @media(max-width: 1082px) {
        .about-container{
            &__content-history{
                p{
                    width: 80%;
                }
            }
            &__image{
                img{
                    width: 70%;
                    opacity: 0.7;
                    border-radius: 5%;
                }
            }
        }
    }
    
    @media(max-width: 766px) {
        .about-container{
            padding-top: 120px;
        }
    }

    @media(max-width: 450px) {
        .about-container{
            &__image{
                img{
                    width: 80%;
                    opacity: 0.7;
                    border-radius: 5%;
                }
            }

            &__content-history{
                p{
                    width: 90%;
                }
            }
        }
    }
</style>
    