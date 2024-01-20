<script setup>
import { useRouter } from 'vue-router';
import { defineProps, defineEmits } from 'vue';

const route = useRouter();

const emits =  defineEmits(["close-aside1", "close-aside2"]) 

const props =  defineProps({
    showAsideMenu1: Boolean,
    showAsideMenu2: Boolean
})
function handleNavigation1(routeName){

    emits('close-aside1');
    route.push({path: routeName});
}

function handleNavigation2(routeName){

    emits('close-aside2');
    route.push({path: routeName});
}

</script>
    

<template>
    <aside class="aside-menu1" :class="{'--show1': showAsideMenu1}">
        <ul class="aside-menu1__items">
            
                <li @click="handleNavigation1('/')" class="aside-menu1__items__item">Home</li>
                
                <li @click="handleNavigation1('/profile')" class="aside-menu1__items__item">Historia</li>
            
                <li @click="handleNavigation1('/contact')" class="aside-menu1__items__item">Contacto</li>
    
            
        </ul>
    </aside>

    <aside class="aside-menu2" :class="{'--show2': showAsideMenu2}">
        <ul class="aside-menu2__items">
            
                <li @click="handleNavigation2('/gallery/personales')" class="aside-menu2__items__item">Personasles</li>
                
                <li @click="handleNavigation2('/gallery/pareja')" class="aside-menu2__items__item">Parejas</li>
            
                <li @click="handleNavigation2('/gallery/familiares')" class="aside-menu2__items__item">Familiares</li>

                <li @click="handleNavigation2('/gallery/perros')" class="aside-menu2__items__item">Perros</li>

                <li @click="handleNavigation2('/gallery/aves')" class="aside-menu2__items__item">Aves</li>

        </ul>
    </aside>
</template>


<style lang="scss" scoped>
.aside-menu1{

    position: fixed;
    top: -180px;
    height: 200px;
    background-color: rgb(24, 82, 81,0.9);
    width: 170px;
    transition: all 0.3s;
    padding-top: 20px;
    border-radius: 10px;

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

        &.--show1{
            top: 120px;
        }
}
    .aside-menu2{

        position: fixed;
        top: -180px;
        height: 300px;
        background-color: rgb(24, 82, 81,0.9);
        width: 170px;
        transition: all 0.3s;
        padding-top: 20px;
        right: 0;
        border-radius: 10px;

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

        &.--show2{
            top: 120px;
        }
}

</style>