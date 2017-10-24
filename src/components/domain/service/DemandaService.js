import Envelope from './Envelope';

export default class DemandaService {
    constructor(resource) {
        this._resource = resource('http://localhost:3000/envelopes{/id}');
    }

    pesquisa(id) {
        return this._resource.get({
            id: id
        }).then(res => res.json(), err => {
            console.log('Ocorreu um erro');
            console.log(err);
            throw new Error('Não foi possível obter a demanda');
        });
    }
}