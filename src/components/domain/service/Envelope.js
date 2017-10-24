export default class Envelope {
    constructor(status = '', titulo = '', mensagem = '', objeto) {
        this.status = status;
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.objeto = objeto;
    }
}