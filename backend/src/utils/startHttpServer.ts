import path from "path";
import express from "express";
import {
    IS_DEVELOPMENT,
    PORT_WEB,
    PORT_API,
    SERVER_HOST,
    AZURE_CLIENT_ID,
    AZURE_SCOPES,
    AZURE_TENDANT_ID
} from "../config";
import { logStartup } from "./log";

export function startHttpServer(app: express.Application) {
    if (IS_DEVELOPMENT) {
        // when in delvelopment we are only a rest api server, so need to use PORT_API
        app.listen(PORT_API, SERVER_HOST);
        logStartup(`--------------------------------------------------------------`);
        logStartup(` ---> Vitejs on http://localhost:${PORT_WEB}`);
        logStartup(` ---> Backend using port: ${PORT_API} for API (vitejs proxy use this)`);
        logStartup(` ---> Running in mode: ${IS_DEVELOPMENT ? "Development" : "Production"}`);
        logStartup(` ---> AZURE_CLIENT_ID: ${AZURE_CLIENT_ID}`);
        logStartup(` ---> AZURE_TENDANT_ID: ${AZURE_TENDANT_ID}`);
        logStartup(` ---> AZURE_SCOPES: ${AZURE_SCOPES}`);
        logStartup(`--------------------------------------------------------------`);
    } else {
        app.listen(PORT_WEB, SERVER_HOST);
        logStartup(`--------------------------------------------------------------`);
        logStartup(` ---> Running on http://localhost:${PORT_WEB}`);
        logStartup(` ---> Serving pages from ${path.join(__dirname, "../", "frontend")}`);
        logStartup(` ---> Running in mode: ${IS_DEVELOPMENT ? "Development" : "Production"}`);
        logStartup(` ---> AZURE_CLIENT_ID: ${AZURE_CLIENT_ID}`);
        logStartup(` ---> AZURE_TENDANT_ID: ${AZURE_TENDANT_ID}`);
        logStartup(` ---> AZURE_SCOPES: ${AZURE_SCOPES}`);
        logStartup(`--------------------------------------------------------------`);
    }
}
