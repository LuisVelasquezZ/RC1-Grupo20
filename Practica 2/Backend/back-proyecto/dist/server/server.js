"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const http = require("http");
const socket_1 = __importDefault(require("../socket/socket"));
const mongoose = require('mongoose');
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.serverSocket = http.createServer(this.app);
    }
    static init(port) {
        return new Server(port);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    start(callback) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
    /**
     * SOCKET.IO
     */
    startSocket(callback) {
        let io = socketIO(this.serverSocket);
        /**
         * INSTANCIA DE SOCKETS
         */
        socket_1.default.getInstance().listenServer(io);
        /**
         * INSTANCIA DE MONGOOSE
         */
        mongoose.connect('mongodb://networkapi/proyecto', {
            //mongoose.connect('mongodb://0.0.0.0:27017/proyecto', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (error, res) => {
            if (error)
                throw error;
            console.log('Conexion a Mongo DB');
        });
        this.serverSocket.listen(this.port, callback);
        this.publicFolder();
    }
}
exports.default = Server;
