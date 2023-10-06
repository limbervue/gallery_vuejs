<script setup>
import { ref } from 'vue';

defineProps({
    showAsideMenu: Boolean
})

</script>


<template>
    <aside class="aside-menu" :class="{'--show': showAsideMenu}">
        <ul class="aside-menu__items">
            <router-link to="/">
                <li class="aside-menu__items__item">Home</li>
            </router-link>
            
            <router-link to="/about">
                <li class="aside-menu__items__item">Historia</li>
            </router-link>
            
            <router-link to="/contact">
                <li class="aside-menu__items__item">Contacto</li>
            </router-link>
            
        </ul>
    </aside>
</template>


<style lang="scss" scoped>
.aside-menu{
    z-index: 9;
    position: fixed;
    top: 0;
    left: -200px;
    height: 100svh;
    background-color: rgb(24, 82, 81);;
    width: 200px;
    transition: all 0.3s;
    padding-top: 10px;
    
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
    &.--show{
        left: 0;
    }
}
</style>