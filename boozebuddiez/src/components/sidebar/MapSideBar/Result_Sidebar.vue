<template>
<div>
    <div class="row">
        <div class="col-12">Results</div>
    </div>
    <div v-for="bar in this.results" :key="bar.id">
        <resultcard v-bind:bar="bar"/>
    </div>
    <div class="row">
        <div class="col-12" @click="ResetSearch"> RETURN </div>
    </div>
</div>
</template>

<script>
import resultcard from './resultCard'
export default {
    components:{
        resultcard
    },
    computed:{
        results(){
            return this.$store.getters.getSearchResult
        }
    },
    methods:{
        ResetSearch(){
            this.$store.dispatch("SaveSearchResult", null)
        }
    }
    
}
</script>

<style>

</style>