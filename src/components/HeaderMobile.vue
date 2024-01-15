<script setup>
    import categoryTitle from '../data/category_titles.json';
    import { useRouter } from 'vue-router';

    const route = useRouter();
    import { ref } from 'vue';

    const showDropdown1 = ref(false)
    const showDropdown2 = ref(false)

    function toggleDropdown1() {
        showDropdown1.value = !showDropdown1.value
    }
    function toggleDropdown2() {
        showDropdown2.value = !showDropdown2.value
    }
    function handleNavigation(routeName){

        showDropdown1.value = false;
        showDropdown2.value = false;
        route.push({path: routeName});
    }

   
</script>

<template>
    <header>
        <div class="container-fluid">

            <div class="content-header">
                <div class="content-title">  
                    <h1 class="nav__title">{{ categoryTitle[$route.params.category??'default'] }} </h1>
                </div>
                
                <div @click="toggleDropdown1()" class="dropMenu1">
                    <img class="aside-menu-toggle" src="../assets/images/menu_white.png">    
                </div>
            
            <!-- Dropdown -->
                <nav v-if="showDropdown1" class="menu1">
                
                    
                    <ul>   
                                
                        <li @click="handleNavigation('/')" class="nav__items__item">HOME</li>
                    
                        <li @click="handleNavigation('/profile')" class="nav__items__item">HISTORIA</li>
                    
                        <li @click="handleNavigation('/contact')" class="nav__items__item">CONTACTO</li>
                       
                        
                    </ul>
                </nav>

                <div @click="toggleDropdown2()" class="dropMenu2">
                    <img class="aside-menu-toggle" src="../assets/images/menu_white.png">    
                </div>
            
            <!-- Dropdown -->
                <nav v-if="showDropdown2" class="menu2">
                
                    <ul>

                        <li @click="handleNavigation('/gallery/personales')" class="nav__items__item">Personales</li>
                    
                        <li @click="handleNavigation('/gallery/pareja')" class="nav__items__item">Parejas</li>
                    
                        <li @click="handleNavigation('/gallery/familiares')" class="nav__items__item">Familiares</li>
                    
                        <li @click="handleNavigation('/gallery/perros')" class="nav__items__item">Perros</li>
                    
                        <li  @click="handleNavigation('/gallery/aves')" class="nav__items__item">Aves</li>
                        
                        
                    </ul>
                </nav>
            </div>
            
        </div>
    </header>
</template>

<style scoped>
    header{
        margin-bottom: -55px;
    }
    .content-header{
        z-index: 8;
        position: fixed;
        top: 0;
        width:100%;
        padding-right:  40px;
        background-color: rgb(9, 55, 54);
        border-bottom: 4px solid rgb(105, 134, 133);
        padding-bottom: 10px;
        left: 0;
        height: 124px;
    }
    .dropMenu1{
        top: 14px;
        position: fixed;
        z-index: 9;
        left: 17px;
    }
    .dropMenu1 img{
        width: 36px;
        margin: 20px;
    }
    .dropMenu2{
        top: 14px;
        position: fixed;
        z-index: 9;
        right: 17px;
    }
    .dropMenu2 img{
        width: 36px;
        margin: 20px;
    }
    .content-title{
        top: 23px;
        position: fixed;
        left: 128px;
    }
    .contentMenu{
        left: 0;
        list-style-type: none;
    }
    .menu1{
        padding-top: 41px;
        font-family: Helvetica, Arial;
        width: 172px;
        background-color: rgb(24, 82, 81);
        color: #eee; 
        text-transform: uppercase;
        margin-bottom: 20px;
        height: 238px;
        position: fixed;
        top: 56px;
        z-index: 8;
        left: 16px;
        transition: all 0.3s;
    }

    .menu1 ul{
        line-height: 46px;
        
    }

    .menu1 ul li{
        height: 50px;
        display: inline-block;
        transition: all 300ms;
        width: 169px;
        
        color: antiquewhite; 
    }

    .menu2{
        padding-top: 41px;
        font-family: Helvetica, Arial;
        width: 172px;
        background-color: rgb(24, 82, 81);
        text-transform: uppercase;
        margin-bottom: 20px;
        height: 374px;
        position: fixed;
        top: 56px;
        z-index: 8;
        right: 21px;
        transition: all 0.3s;
    }

    .menu2 ul{
        line-height: 46px;
        
    }

    .menu2 ul li{
        height: 50px;
        display: inline-block;
        transition: all 300ms;
        width: 169px;
        color: antiquewhite; 
    }
    .menu2 ul li:hover{
        cursor: pointer;
        background-color: rgb(10, 31, 31);
    }
    .menu1 ul li:hover{
        cursor: pointer;
        background-color: rgb(10, 31, 31);
    }

    @media (max-width: 767px) {
        .content-title h1{
            font-size: 34px;
        }
        .content-title{
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
        .content-title h1{
            font-size: 30px;
        }
        .content-title{
            left: 103px;
            top: 32px; 
        }
    }
    @media (max-width: 514px) {

        .content-header{
            height: 100px;
        }
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
        .content-title{
            left: 78px;
            top: 33px;
        }

        .content-title h1{
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
        .content-title{
            left: 67px;
            top: 34px;
        }

        .content-title h1{
            font-size: 20px;
        }
    }
</style>
