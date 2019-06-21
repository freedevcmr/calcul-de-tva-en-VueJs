<template>
  <div class="container" id="app">
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <img alt="Vue logo" src="./assets/imgtva.png">
        <Tva msg="Calcul de la Tva"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tva from './components/Tva.vue'

export default {
  name: 'app',
  components: {
    Tva
  }
}
</script>

<style>
body {
  padding-top: 2rem;
}
</style>
