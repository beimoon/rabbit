<template>
    <AppTonav></AppTonav>
    <AppHeader></AppHeader>
    <div class="main">
        <RouterView/>
    </div>
    <AppFooter ></AppFooter>
</template>

<script>
import AppTonav from "../../components/AppTonav/index.vue";
import AppHeader from '../../components/AppHeader/index.vue'
import AppFooter from '../../components/AppFooter/index.vue'

import {useStore} from "vuex";

export default {
    name: "Layout",
    components: {AppFooter, AppHeader, AppTonav},
    component: {AppTonav},
    setup(){
        const store=useStore()
        store.dispatch('category/getList')
    }
}
</script>

<style scoped>
</style>
