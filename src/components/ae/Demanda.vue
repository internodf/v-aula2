<template>
  <div class="container-full">
    <div v-if="this.envelope.status == '200'" class="container-full">
      <div class="row alert bg-primary">
        <div class="col-sm-3">Dias em análise prévia:
          <b>{{ demanda.diasPreliminar }}</b>
        </div>
        <div class="col-sm-3">Dias em andamento:
          <b>{{ demanda.diasAndamento }}</b>
        </div>
        <div class="col-sm-2">Dias Interrompida:
          <b>{{ demanda.diasInterrompida }}</b>
        </div>
        <div class="col-sm-2">Total dias:
          <b>{{ demanda.totalDias }}</b>
        </div>
        <div class="col-sm-2">Horas Alocadas:
          <b>{{ demanda.horasAlocadas }}</b>
        </div>
      </div>
      <linha label="Situacao" :content="demanda.nomeEstado" />
      <linha label="Demanda prioritária" :content="demanda.prioritaria" />
      <linha label="Previsão conclusão" :content="demanda.previsaoConclusao" />
      <linha label="Limite conclusão" :content="demanda.limiteConclusao" />
      <linha label="Realização (andamento/conclusão)" :content="demanda.inicioRealizacao + ' a ' + demanda.fimRealizacao" />
      <linha label="Protocolo Gedip" :content="demanda.codigoGedip + ' recebido em ' + demanda.dataGedip" />
      <linha label="Forma de detecção" :content="demanda.nomeFormaDeteccao" />
      <linha label="Enquadramento" :content="demanda.nomeEnquadramento" />
      <linha label="Encaminhamento" :content="demanda.nomeEncaminhamento" />
      <linha label="Demandante" :content="demanda.uorDemandante + ' - ' + demanda.nomeDemandante" />
      <linha label="GA Relacionamento" :content="demanda.uorRelacionamento + ' - ' + demanda.nomeRelacionamento" />
      <linha label="GA Executora" :content="demanda.uorExecutora + ' - ' + demanda.nomeExecutora" />
      <linha label="Unidades envolvidas" :content-array="demanda.unidadesEnvolvidas" />
      <linha label="Objetos envolvidos" :content-array="demanda.objetosEnvolvidos" />
      <linha label="PMI" :content-array="demanda.itensPMI" route-name="editPMI" route-id="2017" />
      <linha label="Data primeira ocorrência" :content="demanda.dataPrimeiraOcorrencia" />
      <linha label="Data última ocorrência" :content="demanda.dataUltimaOcorrencia" />
      <linha label="Síntese dos fatos" :content="demanda.sinteseFatos" />
      <linha label="Parecer da gerência" :conente="demanda.parecer" />
    </div>
    <div v-else class="alert alert-warning">
      <strong>Atenção:</strong> {{ envelope.mensagem || 'Verifique a url e os parâmetros da consulta'}}
    </div>
    id: {{ id }}
  </div>
</template>

<script>
  import Demanda from '../domain/entity/Demanda';
  import DemandaService from '../domain/service/DemandaService';
  import Linha from '../shared/Linha.vue';
  import Envelope from '../domain/service/Envelope';

  export default {
    components: {
      'linha': Linha
    },
    data() {
      return {
        moduleName: 'Dados Gerais',
        demanda: new Demanda(),
        envelope: new Envelope(),
        id: this.$route.params.id
      }
    },
    created() {
      this.service = new DemandaService(this.$resource);
      let promise = this.service.pesquisa(this.id);
      promise.then(res => {
        this.demanda = res.objeto;
        this.envelope = res;
      }, err => this.mensagem = err.message);

      this.$parent.$emit('changeTitle', this.moduleName);
    }
  }
</script>

<style scoped>
  .rotulo {
    font-weight: bold;
    text-align: right
  }
</style>