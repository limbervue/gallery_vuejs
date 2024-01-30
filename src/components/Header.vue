<script setup>
    import { ref, onMounted} from 'vue';
    import categoryTitle from '../data/category_titles.json';
    
    defineEmits(['toggle-aside','close-equis']);

    const props = defineProps({
        menuToggle: Boolean, 
        menuEquis: Boolean
    })

</script>

<template>
     <header>
        <nav class="nav-main">
                <div class="content-header">
                    
                    <h1 class="nav-main__title">{{ categoryTitle[$route.params.category??'default'] }} </h1>

                </div>
            
                <ul class="nav-main__items ">
                
                    <li class="nav-main__items__item nav-main__items__menu-category"  @click="$emit('toggle-aside')"> 

                        <div  v-if="menuToggle">
                            <img class="aside-menu-toggle" src="../assets/images/menu_white.png">    
                        </div>

                        <div v-if="menuEquis">
                            <img class="aside-menu-toggle" src="../assets/images/equis.png">    
                        </div>
                    </li>
                    
                    <ul  v-if="$route.name === 'root' || $route.path === '/gallery/personales' || $route.path === '/gallery/parejas' || $route.path === '/gallery/familiares' || $route.path === '/gallery/perros' || $route.path === '/gallery/aves'" 
                    class="nav-main__items ">
                        <router-link to="/gallery/personales">
                            <li class="nav-main__items__item">Personales</li>
                        </router-link>
                        
                        <router-link to="/gallery/parejas">
                            <li class="nav-main__items__item">Parejas</li>
                        </router-link>

                        <router-link to="/gallery/familiares">
                            <li class="nav-main__items__item">Familiares</li>
                        </router-link>

                        <router-link to="/gallery/perros">
                            <li class="nav-main__items__item">Perros</li>
                        </router-link>

                        <router-link to="/gallery/aves">
                            <li class="nav-main__items__item">Aves</li>
                        </router-link>
 
                    </ul>
                                           
                </ul>
                
            </nav>
    </header>

</template>


<style lang="scss" scoped>

    h1{
        color: white;
        font-size: 3.2em;
        line-height: 1.1;

    }
    header{
        height: 170px;
    }
    a:hover{
        text-decoration: none;
    }
    nav, .nav-main{
        z-index: 8;
        position: fixed;
        top: 0;
        width:100%;
        padding-right:  40px;
        background-color: rgb(24, 82, 81);;
        border-bottom: 4px solid rgb(115, 205, 198);
        padding-bottom: 10px;
        left: 0;
        height: 160px;

        &__title{
            text-align: center;
            margin-top: 30px;
            margin-bottom: 20px;
            margin-right: -20px;
            color: white;
            text-shadow: 1px 1px 2px black;
        }
        &__items{
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            flex-direction: row;
            list-style-type: none;
            gap: 12px;
            flex-wrap: wrap;
            text-decoration: none;
            
            &__item{
                padding: 10px;
                border-radius: 0.4rem;
                transition: all 0.5s;
                color: white;
                font-size: 18px;
                text-shadow: 1px 1px 2px black;
               
                .aside-menu-toggle{
                
                    width:25px;
                    color: white;
                }
                &:hover{
                    cursor: pointer;
                    background-color: rgb(27, 144, 142);
                }
            }
            &__menu-category{
                position: absolute;
                left: 15px;
            }
        }
        
    }
    
</style>