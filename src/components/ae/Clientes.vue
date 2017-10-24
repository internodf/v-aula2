<template>
  <div>
    id: {{ id }}
  </div>
</template>

<script>
  import Demanda from '../domain/entity/Demanda';
  import DemandaService from '../domain/service/DemandaService';
  import Linha from '../shared/Linha.vue';

  export default {
    data() {
      return {
        moduleName: 'Clientes',
        demanda: new Demanda(),
        id: this.$route.params.id
      }
    },
    created() {
      this.service = new DemandaService(this.$resource);
      this.service.pesquisa(this.id).then(demanda => this.demanda = demanda, err => this.mensagem = err.message);
      this.$parent.$emit('changeTitle', this.moduleName);
    }
  }
</script>

<style scoped>

</style>