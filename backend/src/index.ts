import { initHttpConfig } from "./utils/initDefaultHttp";
import { startHttpServer } from "./utils/startHttpServer";
import express from "express";
import { auth } from "./api/auth";
import { azureConfig } from "./api/azureConfig";
export const app = express();

// start application
initHttpConfig(app);

// init database connection
// TODO: for you :-)

// add rest api
auth(app);
azureConfig(app);

// time to start server
startHttpServer(app);
