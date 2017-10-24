// este arquivo deverá ser importado pelo main.js
// importar os componentes que serão utilizados nas rotas

// CORE DEMANDA AE
import Ajuda from './components/ae/Ajuda.vue';
import Clientes from './components/ae/Clientes.vue';
import Demanda from './components/ae/Demanda.vue';
import EDoc from './components/ae/EDoc.vue';
import Envolvidos from './components/ae/Envolvidos.vue';
import Equipe from './components/ae/Equipe.vue';
import Home from './components/ae/Home.vue';
import Indicadores from './components/ae/Indicadores.vue';
import Ocorrencias from './components/ae/Ocorrencias.vue';
import Validacao from './components/ae/Validacao.vue';
import Valores from './components/ae/Valores.vue';

// AIRR
// import Airr from './components/airr/AcoesIrregulares.vue';
const Airr = () => System.import('./components/airr/AcoesIrregulares.vue');

// ATIVIDADES
// import Atividades from './components/atividades/Atividades.vue'; 
const Atividades = () => System.import('./components/atividades/Atividades.vue');

// CHECKLIST
// import Checklist from './components/Checklist/Checklist.vue';
const Checklist = () => System.import('./components/Checklist/Checklist.vue');

// DOCUMENTO DE INFORMACOES PRELIMINARES - DIP
//import Dip from './components/dip/Dip.vue';
const Dip = () => System.import('./components/dip/Dip.vue');

// PLANO OPERACIONAL
// import PlanoOperacional from './components/po/PlanoOperacional.vue';
const PlanoOperacional = () => System.import('./components/po/PlanoOperacional.vue');

// Fluxo de solicitacoes de alteração da demanda
// import Solicitacoes from './components/solicitacoes/Solicitacoes.vue';
const Solicitacoes = () => System.import('./components/solicitacoes/Solicitacoes.vue');

// EDIÇÃO
// import EditarPMI from './components/ae/edit/EditarPMI.vue';
const EditarPMI = () => System.import('./components/ae/edit/EditarPMI.vue');

// configurações das rotas
// uma rota é um objeto javascript com 2 propriedades
// p1 = path: 'minhaurl'
// p2 = componente que será carregado no endereço: NomeComponente
// atenção - quando não usa export default, não pode importar um elemento padrão, tem que usar chaves {} para dizer qual elemento está sendo importado
export const routes = [
    // MENU
    {
        path: '/demanda/:id',
        name: 'demanda',
        component: Demanda,
        titulo: 'Dados Gerais',
        menu: true
    },
    {
        path: '/equipe',
        name: 'equipe',
        component: Equipe,
        titulo: 'Equipe',
        menu: true
    },
    {
        path: '/clientes',
        name: 'clientes',
        component: Clientes,
        titulo: 'Clientes',
        menu: true
    },
    {
        path: '/valores',
        name: 'valores',
        component: Valores,
        titulo: 'Valores',
        menu: true
    },
    {
        path: '/envolvidos',
        name: 'envolvidos',
        component: Envolvidos,
        titulo: 'Funcionários envolvidos',
        menu: true
    },
    {
        path: '/indicadores',
        name: 'indicadores',
        component: Indicadores,
        titulo: 'Indicadores',
        menu: true
    },
    {
        path: '/edoc',
        name: 'edoc',
        component: EDoc,
        titulo: 'e-Doc',
        menu: true
    },
    {
        path: '/ocorrencias',
        name: 'ocorrencias',
        component: Ocorrencias,
        titulo: 'Ocorrências',
        menu: true
    },
    {
        path: '/validacao',
        name: 'validacao',
        component: Validacao,
        titulo: 'Validar Demanda',
        menu: true
    },
    // ACOES IRREGULARES
    {
        path: '/airr',
        name: 'airr',
        component: Airr,
        titulo: 'Ações Irregulares',
        menu: true
    },
    // ATIVIDADES
    {
        path: '/atividades',
        name: 'atividades',
        component: Atividades,
        titulo: 'Atividades',
        menu: true
    },
    // CHECKLIST / AIQ
    {
        path: '/checklist',
        name: 'checklist',
        component: Checklist,
        titulo: 'Checklist/AIQ',
        menu: true
    },
    // DIP
    {
        path: '/dip',
        name: 'dip',
        component: Dip,
        titulo: 'DIP',
        menu: true
    },
    // PLANO OPERACIONAL
    {
        path: '/po',
        name: 'po',
        component: PlanoOperacional,
        titulo: 'Plano Operacional',
        menu: true
    },
    // SOLICITACOES
    {
        path: '/solicitacoes',
        name: 'solicitacoes',
        component: Solicitacoes,
        titulo: 'Solicitacoes',
        menu: true
    },
    {
        path: '/ajuda',
        name: 'ajuda',
        component: Ajuda,
        titulo: 'Ajuda',
        menu: true
    },
    {
        path: '/e/pmi/:id',
        name: 'editPMI',
        component: EditarPMI,
        titulo: 'Editar PMI',
        menu: false
    },
    // DEFAULT ROUTE
    {
        path: '*',
        component: Demanda,
        menu: false
    }
];