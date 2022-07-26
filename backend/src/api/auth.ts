import { SERVER_API_ROOT } from "../config";
import { logStartup } from "../utils/log";
import { protectedRoute } from "./protectedRoute";
import express from "express";

type User = {
    name: string;
    id: string;
    roles: string[];
};

export function auth(app: express.Application) {
    const API_CONFIG = `${SERVER_API_ROOT}/auth`;
    logStartup("API added:", API_CONFIG);

    app.get(API_CONFIG, protectedRoute, async function (req: any, res, next) {
        const user = req.user as User;
        const userName = user?.name;
        const userID = user?.id;
        const userRoles = user?.roles;

        res.status(200).send({
            allUserRoles: userRoles,
            user: { userName, userID }
        });
        res.end();
        next();
    });
}
