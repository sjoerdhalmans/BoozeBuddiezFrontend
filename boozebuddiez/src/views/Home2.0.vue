<template>
    <div>
        <sidebarComponent/>
        <mapComponent/>
    </div>
</template>

<script>
import mapComponent from '@/components/map/Map.vue'
import sidebarComponent from '@/components/sidebar/SideBar.vue'
export default {
    components:{
        mapComponent,
        sidebarComponent,
    }
}
</script>

<style>

</style>