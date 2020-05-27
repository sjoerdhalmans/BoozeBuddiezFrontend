<template>
  <div>  
        <div id="app">
            <mapbox
            access-token="pk.eyJ1IjoibWFyaW8wMjYiLCJhIjoiY2thcDFvZ2ZtMDFnaTJ6cGFiajRwN3didyJ9.CYOzUb9FrBkpqg-NcFbJfA"
            :map-options="{
                style: 'mapbox://styles/mapbox/light-v9',
                center: [-96, 37.8],
                zoom: 3,
            }"
            />
        </div>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
export default {
    name: "Map",
    components:{
        Mapbox
    }

}
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>