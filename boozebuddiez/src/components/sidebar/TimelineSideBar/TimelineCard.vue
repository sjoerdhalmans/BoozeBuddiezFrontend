<template>
  <div >
  <div class="row" >
    <div class="col-1" />   
      <div class="col-5">
      {{activity.user.name}}
    </div>
          <div class="col-5">
     
    </div>
  </div>
  <div class="row">
      <div class="col-1" />
      <div class="col-5">
      Has checked in at {{activity.bar.name}}
    </div>
    <div class="col-5">
      {{activity.timeEnteredBar.substring(0,10)}}, {{activity.timeEnteredBar.substring(11,17)}}
    </div>
    
    </div>
    <hr>
</div>
</template>

<script>
export default {
    props: ['activity'],

}
</script>

<style>

</style>