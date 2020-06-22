<template>
  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9" style="background-color: blanchedalmond;">  
    <mapbox
    ref="map"
    access-token="pk.eyJ1IjoibWFyaW8wMjYiLCJhIjoiY2thcDFvZ2ZtMDFnaTJ6cGFiajRwN3didyJ9.CYOzUb9FrBkpqg-NcFbJfA"
    :map-options="{
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.getMapFocus.lat, this.getMapFocus.long],
        zoom: 10,
    }"
          :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      @map-load="loaded"
      @map-zoomend="zoomend"
      @map-click:points="clicked"
      @map-click="createNew"
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
import axios from 'axios'
let mapRef = null
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
    getMapFocus(){
      this.flyToSearch()
      return this.$store.getters.getBarFocus;
    },

},
  components: { 
      Mapbox 
  },
methods: {
  createNew(map,e){
  var lat = e.lngLat.lat
  var lng = e.lngLat.lng
  var url = "http://open.mapquestapi.com/geocoding/v1/reverse?key=7YGwtYpYPF2FbGl6R3Wkf2rWIbZPi2c2&location="+Number(lat)+","+Number(lng)+"&includeRoadMetadata=true&includeNearestIntersection=true"

  axios.get(url)
        .then(response => (
        this.$store.dispatch('SaveNewBar',response.data.results[0].locations),
        this.$store.dispatch('SaveSearchResult', null)
        ))
  },
    loaded(map) {
      mapRef = map
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
      this.flyTo(e)
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
    },
    flyToSearch(){
      if(mapRef !== null){
        mapRef.flyTo({
        center: [
            this.$store.getters.getBarFocus.lat,
            this.$store.getters.getBarFocus.long],
            zoom: 17,
        });
      }
    },
    flyTo(e){
      if(mapRef !== null){
        mapRef.flyTo({
        center: [
            e.lngLat.lng,
            e.lngLat.lat],
            zoom: 13,
        });
      }
    }
    
},
}
</script>

<style>
#map {
  width: 100%;
  height: 700px;
  top: 0; 
  bottom: 0;
  border-radius: 20px;
}
</style>