<script setup>
    import { ref, onMounted} from 'vue';
    import categoryTitle from '../data/category_titles.json';
    
    defineEmits(['toggle-aside','close-equis']);

    const props = defineProps({
        menuToggle: Boolean, 
        menuEquis: Boolean
    })

    const max950 = ref(window.innerWidth > 950);
    const min950 = ref(window.innerWidth < 950);
    // Función para actualizar el valor de width852 cuando cambia el tamaño de la ventana
    const handleResize = () => {
        max950.value = window.innerWidth > 950;
        min950.value = window.innerWidth < 950;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize); // Agregar el listener al cargar el componente
        
    });

</script>

<template>
     <header>
        <nav class="nav">
                <div class="content-header">
                    
                    <h1 class="nav__title">{{ categoryTitle[$route.params.category??'default'] }} </h1>

                </div>
            
                <ul class="nav__items">
                
                    <li class="nav__items__item menu"  @click="$emit('toggle-aside')"> 
                        <div  v-if="menuToggle">
                            <img class="aside-menu-toggle" src="../assets/images/menu_white.png">    
                        </div>

                        <div v-if="menuEquis">
                            <img class="aside-menu-toggle" src="../assets/images/equis.png">    
                        </div>
                    </li>
                    

                    <router-link to="/gallery/personales">
                        <li class="nav__items__item">Personales</li>
                    </router-link>
                    
                    <router-link to="/gallery/pareja">
                        <li class="nav__items__item">Parejas</li>
                    </router-link>

                    <router-link to="/gallery/familiares">
                        <li class="nav__items__item">Familiares</li>
                    </router-link>

                    <router-link to="/gallery/perros">
                        <li class="nav__items__item">Perros</li>
                    </router-link>

                    <router-link to="/gallery/aves">
                        <li class="nav__items__item">Aves</li>
                    </router-link>

                    

                </ul>
                
            </nav>
    </header>

</template>


<style lang="scss" scoped>
    .equis{
        color: aliceblue;
        width: 40px;
    }
    h1{
        color: white;
        font-size: 3.2em;
        line-height: 1.1;

    }
    header{
        height: 170px;
    }
    nav, .nav{
        z-index: 8;
        position: fixed;
        top: 0;
        width:100%;
        padding-right:  40px;
        background-color: rgb(24, 82, 81);;
        border-bottom: 4px solid rgb(115, 205, 198);
        padding-bottom: 10px;
        left: 0;
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
        }
    }
    .menu{
        position: absolute;
        left: 15px;
    }



    
</style>