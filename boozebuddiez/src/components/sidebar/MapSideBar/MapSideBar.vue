<template>
  <div>
    <div v-if="this.searchResult === null">
      <search/>
    </div>
    <div  v-else-if="this.searchResult !== null">
      <result/>
    </div>
    <div  v-if="this.newBar">
      <addbar/>
    </div>
  </div>
</template>

<script>
import addbar from './AddBar_Sidebar'
import result from './Result_Sidebar'
import search from './Search_Sidebar'
export default {
    name:"MapSideBar",
    components:{
      addbar,
      result,
      search
    },
    computed:{
      searchResult(){
        return this.$store.getters.getSearchResult;
      }
    },
    data(){
      return{
        newBar: false,

      }
    }
}
</script>

<style>

</style>