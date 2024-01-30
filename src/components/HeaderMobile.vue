<script setup>

    import categoryTitle from '../data/category_titles.json';

    defineEmits(['toggle-aside-category', 'toggle-aside-retratos']);

    const props = defineProps({
        menuToggleCategory: Boolean, 
        menuEquisCategory: Boolean,
        menuToggleRetratos: Boolean, 
        menuEquisRetratos: Boolean
    })

</script>

<template>
    <header>
    
        <nav class="nav-mobile">

            <div class="content-headerMobile">  
                <h1 class="nav-mobile__title">{{ categoryTitle[$route.params.category??'default'] }} </h1>
            </div>

            <ul class="nav-mobile__items">

                <li class="nav-mobile__items__item nav-mobile__items__category" @click="$emit('toggle-aside-category')">
                    
                    <div  v-if="menuToggleCategory" class="nav-mobile__items__item__aside-menu-toggle">
                        <img src="../assets/images/menu_white.png">    
                    </div>
                    
                    <div v-if="menuEquisCategory" class="nav-mobile__items__item__aside-menu-toggle">
                        <img src="../assets/images/equis.png">    
                    </div>

                </li>
                
                <li v-if="$route.name === 'root' || $route.path === '/gallery/personales' || $route.path === '/gallery/parejas' || $route.path === '/gallery/familiares' || $route.path === '/gallery/perros' || $route.path === '/gallery/aves'" class="nav-mobile__items__item nav-mobile__items__retratos" @click="$emit('toggle-aside-retratos')">

                    <div  v-if="menuToggleRetratos" class="nav-mobile__items__item__aside-menu-toggle">
                        <img src="../assets/images/menu_white.png">    
                    </div>
                    
                    <div v-if="menuEquisRetratos" class="nav-mobile__items__item__aside-menu-toggle">
                        <img src="../assets/images/equis.png">    
                    </div>

                </li>
            
            </ul>
            
        </nav>       
    
    </header>
</template>

<style lang="scss" scoped>
    
    h1{
        color: white;
        font-size: 2.2em;
        line-height: 1.1;
        padding-top: 20px;
    }
    header{
        height: 0px;
    }
    nav, .nav-mobile{
        z-index: 8;
        position: fixed;
        top: 0;
        width:100%;
        padding-right:  40px;
        background-color: rgb(24, 82, 81);;
        border-bottom: 4px solid rgb(115, 205, 198);
        padding-bottom: 10px;
        left: 0;
        height: 130px;

        &__title{
            text-align: center;
            margin-top: 30px;
            margin-bottom: 20px;
            margin-right: -20px;
            color: white;
            text-shadow: 1px 1px 2px black;
            margin-top: 20px;
        }
        &__items{
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            flex-direction: row;
            list-style-type: none;
            gap: 12px;
            flex-wrap: wrap;

            &__item{
                padding: 10px;
                border-radius: 0.4rem;
                transition: all 0.5s;
                color: white;
                font-size: 18px;
                text-shadow: 1px 1px 2px black;
                position: absolute;
                list-style: none;
                top: 80px;

                &__aside-menu-toggle{ 
                
                    img{
                        width:25px;
                    }
                }
                &:hover{
                    cursor: pointer;
                    background-color: rgb(27, 144, 142);
                }
            }
            &__category{
                left: 30px;
                
            }
            &__retratos{
                right: 30px;
    
            }
        }
    }

    @media (max-width: 767px) {
        
        h1{
            font-size: 34px;
        }
        
    }

    @media (max-width: 524px) {
       .nav__title{
            position: relative;
            left: 10px;
       }
    }

    @media (max-width: 360px) {
        .nav__title{
            font-size: 30px;
            left: 15px;
       }
    }

</style>
