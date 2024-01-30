<script setup>
import { useRouter } from 'vue-router';

const route = useRouter();

const emits =  defineEmits(["close-aside-category", "close-aside-retratos"]) 

const props =  defineProps({
    showAsideMenuCategory: Boolean,
    showAsideMenuRetratos: Boolean,
    menuToggleCategory: Boolean,
    menuEquisCategory: Boolean,
    menuToggleRetratos: Boolean,
    menuEquisRetratos: Boolean
})
function handleNavigationCategory(routeName){

    emits('close-aside-category',{
        menuToggleCategory:true,
        menuEquisCategory:false
    })   
    route.push({path: routeName});
}

function handleNavigationRetratos(routeName){

    emits('close-aside-retratos',{
        menuToggleRetratos:true,
        menuEquisRetratos:false
    });   
    route.push({path: routeName});
}

</script>
    

<template>
    <aside class="aside-menu-category" :class="{'--show-category': showAsideMenuCategory}">
        <ul class="aside-menu-category__items">
            
                <li @click="handleNavigationCategory('/')" class="aside-menu-category__items__item">Home</li>
                
                <li @click="handleNavigationCategory('/profile')" class="aside-menu-category__items__item">Historia</li>
            
                <li @click="handleNavigationCategory('/contact')" class="aside-menu-category__items__item">Contacto</li>
            
        </ul>
    </aside>

    <aside class="aside-menu-retratos" :class="{'--show-retratos': showAsideMenuRetratos}">
        <ul class="aside-menu-retratos__items">
            
                <li @click="handleNavigationRetratos('/gallery/personales')" class="aside-menu-retratos__items__item">Personales</li>
                
                <li @click="handleNavigationRetratos('/gallery/parejas')" class="aside-menu-retratos__items__item">Parejas</li>
            
                <li @click="handleNavigationRetratos('/gallery/familiares')" class="aside-menu-retratos__items__item">Familiares</li>

                <li @click="handleNavigationRetratos('/gallery/perros')" class="aside-menu-retratos__items__item">Perros</li>

                <li @click="handleNavigationRetratos('/gallery/aves')" class="aside-menu-retratos__items__item">Aves</li>

        </ul>
    </aside>
</template>


<style lang="scss" scoped>
.aside-menu-category{

    position: fixed;
    top: -180px;
    height: 240px;
    background-color: rgb(24, 82, 81,0.9);
    width: 170px;
    transition: all 0.3s;
    padding-top: 20px;
    border-radius: 10px;
    z-index: 7;
    &__items{
        list-style-type: none;
        display: grid;
        margin: unset;
        text-align: left;
        
        &__item{
            color: antiquewhite;
            padding: 16px 0;
            transition: all 0.3s;
            padding-left: 30px;
            
            &:hover{
                cursor: pointer;
                background-color: rgb(33, 58, 58);
                color: whitesmoke;
                padding-top: -10px;
            }
        }
    }

        &.--show-category{
            top: 120px;
        }
}
    .aside-menu-retratos{

        position: fixed;
        top: -180px;
        height: 300px;
        background-color: rgb(24, 82, 81,0.9);
        width: 170px;
        transition: all 0.3s;
        padding-top: 20px;
        right: 0;
        border-radius: 10px;
        z-index: 7;

    &__items{
        list-style-type: none;
        display: grid;
        margin: unset;
        text-align: left;
        
        &__item{
            color: antiquewhite;
            padding: 16px 0;
            transition: all 0.3s;
            padding-left: 30px;
            
            &:hover{
                cursor: pointer;
                background-color: rgb(33, 58, 58);
                color: whitesmoke;
                padding-top: -10px;
            }
        }
    }

        &.--show-retratos{
            top: 120px;
        }
}

</style>