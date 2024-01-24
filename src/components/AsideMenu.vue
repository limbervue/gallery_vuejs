<script setup>
import { useRouter } from 'vue-router';
import { defineProps, defineEmits } from 'vue';

const route = useRouter();

const emits =  defineEmits(["close-aside"]) 

const props =  defineProps({
    showAsideMenu: Boolean,
    menuToggle: Boolean,
    menuEquis: Boolean
})
function handleNavigation(routeName){

    emits('close-aside',{
        menuToggle:true,
        menuEquis:false
    });
    route.push({path: routeName});
}

</script>
    

<template>
    <aside class="aside-menu" :class="{'--show': showAsideMenu}">
        <ul class="aside-menu__items">
            
                <li @click="handleNavigation('/')" class="aside-menu__items__item">Home</li>
                
                <li @click="handleNavigation('/profile')" class="aside-menu__items__item">Historia</li>
            
                <li @click="handleNavigation('/contact')" class="aside-menu__items__item">Contacto</li>
    
            
        </ul>
    </aside>
</template>


<style lang="scss" scoped>
.aside-menu{

    position: fixed;
    top: -100px;
    height: 200px;
    background-color: rgb(24, 82, 81,0.6);
    width: 170px;
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
        top: 160px;
    }
}
</style>