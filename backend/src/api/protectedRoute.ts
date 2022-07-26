import { verifyToken } from "../utils/verifyToken";
import { log, logError } from "../utils/log";

export async function protectedRoute(req: any, res: any, next: any) {
    let error = false;

    try {
        const tokenVerified = await verifyToken(req.headers.authorization.split("Bearer ")[1]);
        req.user = {
            name: tokenVerified.name,
            id: tokenVerified.upn,
            roles: tokenVerified.roles
        };

        // todo: maybe we can just remove this and replace with procedure/table in db for access
        if (tokenVerified.roles.length === 0) {
            throw "no access";
        } else {
            // todo, verify token
            log("Auth token verified");
        }
    } catch (x) {
        logError("Auth token failed verification");
        res.status(401).send({
            success: false,
            message: "autentication failed",
            auth: false
        });
        error = true;
    }

    if (!error) {
        next();
    }
}
