"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocketServer {
    constructor() { }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    listenServer(socket) {
        this.io = socket;
        this.io.on('connection', (client) => {
            console.log("Usuario conectado :D");
            client.emit('enviarMensaje', {
                usuario: 'Administrador',
                mensaje: 'Bienvenido a la aplicación'
            });
            client.on('disconnect', () => {
                console.log("Cliente desconectado D:");
            });
            //LISTEN CLIENT
            client.on('enviarMensaje', (data, callback) => {
                console.log(data);
                client.broadcast.emit('enviarMensaje', data);
            });
        });
    }
}
exports.default = SocketServer;
