import express from "express";
import helmet from "helmet";
import { WEB_ROOT, IS_DEVELOPMENT } from "../config";

export function initHttpConfig(app: express.Application) {
    if (!IS_DEVELOPMENT) {
        app.use(helmet());
    }

    app.use(express.json());
    app.use("/", express.static(WEB_ROOT));
}
