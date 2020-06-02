<template>
  <div>  
    <mapbox
    access-token="pk.eyJ1IjoibWFyaW8wMjYiLCJhIjoiY2thcDFvZ2ZtMDFnaTJ6cGFiajRwN3didyJ9.CYOzUb9FrBkpqg-NcFbJfA"
    :map-options="{
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-96, 37.8],
        zoom: 3,
    }"
          :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      @map-load="loaded"
      @map-zoomend="zoomend"
      @map-click:points="clicked"
      @geolocate-error="geolocateError"
      @geolocate-geolocate="geolocate"
      @map-mouseenter:points="mouseEntered"
      @map-mouseleave:points="mouseLeft"
    />
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
import mapboxgl from 'mapbox-gl'
import PopupContent from '@/components/map/PopupContent.vue'
export default {
    name: "Map",
    data(){
        return{
            Markers: [],
        }
    },
    computed: {
        getBars() {
      return this.$store.getters.getBarCollection;
    },
},
  components: { 
      Mapbox 
  },
methods: {
    loaded(map) {
        this.loadMarkers();
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: this.Markers,
          },
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        },
      })
    },
    zoomend(map, e) {
      console.log('Map zoomed' + map + e)
    },
    clicked(map, e) {
     if (e.features) {
        const coordinates = e.features[0].geometry.coordinates.slice()
 
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }
 
        var popup = new mapboxgl.Popup()
          .setLngLat({ lng: coordinates[0], lat: coordinates[1]})
          .setHTML('<div id="vue-popup-content"></div>')
          .addTo(map)
 
        new PopupContent({
          propsData: { feature: e.features[0] },
        }).$mount('#vue-popup-content')
      }
      popup._update();
    },
    geolocateError(control, positionError) {
      console.log(positionError)
      console.log('Map controlled' + this.control)
    },
    geolocate(control, position) {
      console.log(
        `User position: ${position.coords.latitude}, ${position.coords.longitude}`
      )
     console.log('Map controlled' + this.control)
    },
        mouseEntered(map) {
      map.getCanvas().style.cursor = 'pointer'
    },
    mouseLeft(map) {
      map.getCanvas().style.cursor = ''
    },
    loadMarkers(){
        this.getBars.forEach(bar => {
            var marker = {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [bar.latitude, bar.longitude],
                },
                properties: {
                  title: bar.name,
                  icon: 'bar',
                },
              }
        this.Markers.push(marker)
        });   
        console.log(this.Markers)
    }
  },
}
</script>

<style>
#map {
  width: 100%;
  height: 500px;
  top: 0; 
  bottom: 0;
}
</style>