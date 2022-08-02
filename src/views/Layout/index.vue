<template>
    <AppTonav></AppTonav>
    <header></header>
    <div class="main">
        <RouterView/>
    </div>
    <footer></footer>
</template>

<script>
import AppTonav from "../AppTonav/index.vue";

export default {
    name: "Layout",
    components: {AppTonav},
    component: {AppTonav},
}
</script>

<style scoped>

</style>
