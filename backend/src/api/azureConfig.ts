import { AZURE_CLIENT_ID, AZURE_SCOPES, AZURE_TENDANT_ID, SERVER_API_ROOT } from "../config";
import { logStartup } from "../utils/log";
import express from "express";

/**
 * we only have this so we do not need to hardcode our config into image
 * @param app
 */
export function azureConfig(app: express.Application) {
    const API_CONFIG = `${SERVER_API_ROOT}/azureConfig`;
    logStartup("API added:", API_CONFIG);

    app.get(API_CONFIG, async function (req: any, res, next) {
        res.status(200).send({
            AZURE_SCOPES,
            AZURE_CLIENT_ID,
            AZURE_TENDANT_ID
        });
        res.end();
        next();
    });
}
