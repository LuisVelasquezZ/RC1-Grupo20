export default class SocketServer {
    private static _instance: SocketServer;
    private io:any;

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    constructor() {}

    public listenServer(socket:any) {
        this.io = socket;
        this.io.on('connection', (client:any) => {
            console.log("Usuario conectado :D");

            client.emit('enviarMensaje', {
                usuario: 'Administrador',
                mensaje: 'Bienvenido a la aplicación'
            })

            client.on('disconnect', () => {
                console.log("Cliente desconectado D:");
            })

            //LISTEN CLIENT
            client.on('enviarMensaje', (data:any, callback:any)=> {
                console.log(data);

                client.broadcast.emit('enviarMensaje', data)
            })
        })
    }


}