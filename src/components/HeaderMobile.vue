<script setup>
    import { ref, onMounted} from 'vue';
    import categoryTitle from '../data/category_titles.json';

    defineEmits(['toggle-aside1', 'toggle-aside2']);

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

            <div class="content-headerMobile">  
                <h1 class="nav__title">{{ categoryTitle[$route.params.category??'default'] }} </h1>
            </div>

            <ul class="nav__items">

                <li class="nav__items__item menu1" @click="$emit('toggle-aside1')">
                    <div>
                        <img class="aside-menu-toggle" src="../assets/images/menu_white.png">    
                    </div>
                </li>
                
                <li class="nav__items__item menu2" @click="$emit('toggle-aside2')">
                    <div>
                        <img class="aside-menu-toggle" src="../assets/images/menu_white.png">    
                    </div>
                </li>
            
            </ul>
            
        </nav>       
    
    </header>
</template>

<style scoped>

    h1{
        color: white;
        font-size: 2.2em;
        line-height: 1.1;
        padding-top: 20px;
    }
    header{
        height: 0px;
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
        height: 120px;

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
    .menu1{
        position: absolute;
        left: 15px;
        list-style: none;
    }
    .menu2{
        position: absolute;
        right: 40px;
        list-style: none;
    }
    
    @media (max-width: 767px) {
        .nav__title h1{
            font-size: 34px;
        }
        .nav__title{
            left: 116px;
            top: 32px; 
        }
    }

    @media (max-width: 568px) {
        .dropMenu1 img{
            width: 32px;
        }
        .dropMenu2 img{
            width: 32px;
        }
        .nav__title h1{
            font-size: 30px;
        }
        .nav__title{
            left: 103px;
            top: 32px; 
        }
    }
    @media (max-width: 514px) {

        .dropMenu1 img{
            width: 26px;
        }
        .dropMenu2 img{
            width: 26px;
        }
        .dropMenu1{
            top: 14px;
            left: 2px;
        }
        .dropMenu2{
            top: 14px;
            right: 2px;
        }
        .nav__title{
            left: 78px;
            top: 33px;
        }

        .nav__title h1{
            font-size: 24px;
        }
    }
    @media (max-width: 396px) {
        .dropMenu1 img{
            width: 22px;
        }
        .dropMenu2 img{
            width: 22px;
        }
        .dropMenu1{
            top: 14px;
            left: 2px;
        }
        .dropMenu2{
            top: 14px;
            right: 2px;
        }
        .nav__title{
            left: 67px;
            top: 34px;
        }

        .nav__title h1{
            font-size: 20px;
        }
    }
</style>
