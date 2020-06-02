<template>
    <div class="row">
        <div class="col-5"> {{rating.beerId}}</div>
        <div class="col-5"> </div>
        <div class="col-2"> {{rating.rating}}</div>
    </div>
    
</template>

<script>

export default {
    props: ['rating']
}
</script>