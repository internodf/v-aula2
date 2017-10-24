<template>
  <div id="app" class="container-full">
    <h1>{{ msg }} {{ id }}- {{ moduleName }}</h1>
    <div id="menu-lateral" class="col-sm-2">
      <menu-lateral :rotas="routes" :id="id"/>
    </div>
    <div class="col-sm-10">
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import {
    routes
  } from './routes';

  import MenuLateral from './components/menu/MenuLateral.vue';
  import Demanda from './components/domain/entity/Demanda';
  import DemandaService from './components/domain/service/DemandaService';

  export default {
    components: {
      'menu-lateral': MenuLateral
    },
    data() {
      return {
        msg: 'Demanda AE',
        moduleName: '',
        routes: routes.filter(route => route.menu),
        demanda: new Demanda(),
        id: this.$route.params.id
      }
    },
    created() {
      this.$on('changeTitle', function(mName) {
        this.moduleName = mName;
      });
    },
    methods: {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .pagina-enter,
  .pagina-leave-active {
    opacity: 0
  }

  .pagina-enter-active,
  .pagina-leave-active {
    transition: opacity .5s
  }

  .container-full {
    margin: 0 auto;
    width: 100%;
  }

  .cabecalho-modulo {
    font-size: 200%;
    font-weight: bold;
  }
</style>