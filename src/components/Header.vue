<script setup>
    import categoryTitle from '../data/category_titles.json';
    defineEmits(['toggle-aside']);
    
</script>

<template>
    <header>
        <nav class="nav">
            <h1 class="nav__title">{{ categoryTitle[$route.params.category??'default'] }}</h1>
            <ul class="nav__items">
                
                <li class="nav__items__item" @click="$emit('toggle-aside')"> 
                    <img class="aside-menu-toggle" src="../assets/images/menu_white.png">
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

                <router-link to="/gallery/gatos">
                    <li class="nav__items__item">Gatos</li>
                </router-link>

                <router-link to="/gallery/aves">
                    <li class="nav__items__item">Aves</li>
                </router-link>
            </ul>
            
        </nav>
        
    </header>
</template>


<style lang="scss" scoped>
nav, .nav{
    z-index: 8;
    position: fixed;
    top: 0;
    width:100%;
    padding-right:  40px;
    background-color: rgb(9, 55, 54);
    border-bottom: 4px solid rgb(105, 134, 133);
    padding-bottom: 10px;
   
    &__title{
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        margin-right: -20px;
    }
    &__items{
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: row;
        list-style-type: none;
        gap: 12px;
        &__item{
            padding: 10px;
            border-radius: 0.4rem;
            transition: all 0.5s;
            color: #fff;
            .aside-menu-toggle{
            
                width:25px;
                color: white;
            }
            &:hover{
                cursor: pointer;
                background-color: rgb(10, 31, 31);
            }
        }
    }
}
header{
    padding-bottom: 30px;
}
</style>