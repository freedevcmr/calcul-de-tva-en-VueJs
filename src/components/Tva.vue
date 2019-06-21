    <template>
      <div>
        <h1>{{ msg }}</h1>
    <div class="jumbotron">

      <div class="row col input-group mb-4">
        <input type="text" v-model="valeurHT" class="form-control">
        <div class="input-group-append">
          <span class="input-group-text">€ HT</span>
        </div>
      </div>

      <div class="row col mb-4">
        Taux :  
        <div class="form-check form-check-inline">
          <input class="form-check-input" value="0.2" type="radio" v-model="taux" name="tva" id="20" checked>
          <label class="form-check-label" for="20">20 %</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" value="0.1" type="radio" v-model="taux" name="tva" id="10">
          <label class="form-check-label" for="10">10 %</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" value="0.055" type="radio" v-model="taux" name="tva" id="55">
          <label class="form-check-label" for="55">5,5 %</label>
        </div>

        <div class="form-check form-check-inline">
          <input class="form-check-input" value="0.021" type="radio" v-model="taux" name="tva" id="21">
          <label class="form-check-label" for="21">2,1 %</label>
        </div>

      </div>

      <div class="row col">
        Montant TTC :  <strong>{{ valeurTTC }}€</strong>
      </div>  

      <div class="row col">
        Montant de la TVA :  <strong>{{valeurTVA }} €</strong>
      </div>

      </div>
      </div>
    <!-- </div> -->
    </template>

<script>
export default {
  name: 'Tva',
  props: {
    msg: String
  },

  data: function () {
            return{
              valeurHT: "0",
              taux:"0.2"
            }
  },

  computed: {
    valeurTTC: function(){
      return parseFloat(this.valeurHT) + this.valeurHT * parseFloat(this.taux);
    },

    valeurTVA: function(){
      return  parseFloat(this.valeurHT * this.taux).toFixed(2);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  margin-top: 2rem;
  padding-bottom: 2rem
}
</style>
