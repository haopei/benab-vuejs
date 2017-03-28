<template>
    <div class="page page--projects">
        <router-view></router-view>
    </div>
</template>

<script>
import AllProjectsList from './../components/AllProjectsList/AllProjectsList.vue'
export default {
    components: {
        AllProjectsList
    }
}
</script>

<style lang="scss">
</style>
