import { WebSocket, WebSocketServer } from "https://deno.land/x/websocket/mod.ts";

const wss = new WebSocketServer(8080);
var connections: WebSocket[] = [];

export function listen() {
    wss.on("connection", function (ws: WebSocket) {
        connections.push(ws);
        ws.on("message", function (message: string) {
            for (const c of connections) {
                if (c != ws) {
                    c.send(message);
                }
            }
            console.log(message);
        });

        ws.on("close", function(ws:WebSocket) {
            connections.splice(connections.indexOf(ws), 1);
            console.log("A ws was closed.");
        });
    });
}