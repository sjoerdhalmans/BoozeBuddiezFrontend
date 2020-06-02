<template>
<div>
    <div id="nav">
      <Navigation />
    </div>
    <div class="row">
        <sidebarComponent/>
        <mapComponent/>
    </div>
</div>
</template>

<script>
import mapComponent from '@/components/map/Map.vue'
import sidebarComponent from '@/components/sidebar/SideBar.vue'
import Navigation from '@/components/Navigation.vue'
export default {
    components:{
        mapComponent,
        sidebarComponent,
        Navigation
    }
}
</script>

<style>

</style>