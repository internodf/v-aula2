<template>
  <div>
    <div class="cabecalho-modulo">Equipe da demanda</div>
    <table class="table table-hover">
      <thead>
        <tr class="bg-primary">
          <th>Matrícula/nome</th>
          <th>Função</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="funci in demanda.equipe" :key="funci.codigo">
          <td>
            <button @click="excluirEquipe(funci)" class="btn">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            {{ funci.codigo }} - {{ funci.nome}}
          </td>
          <td>{{ funci.funcao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Demanda from '../domain/entity/Demanda';
  import DemandaService from '../domain/service/DemandaService';
  import Linha from '../shared/Linha.vue';

  export default {
    data() {
      return {
        moduleName: 'Equipe',
        demanda: new Demanda(),
        id: this.$route.params.id,
        mensagem: ''
      }
    },
    created() {
      this.service = new DemandaService(this.$resource);
      this.service.pesquisa(this.id).then(demanda => {
        this.demanda = demanda;
      }, err => this.mensagem = err.message);

      this.$parent.$emit('changeTitle', this.moduleName);
    },
    methods: {
      excluirEquipe(funci) {
        alert('excluir');
        // this.service.excluirEquipe(this.id, this.funci.codigo).then( )
        
        console.log(funci);
      }
    }
  }
</script>

<style scoped>

</style>