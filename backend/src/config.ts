import * as path from "path";
import { toArray } from "./utils/toArray";
import { toString } from "./utils/toString";

// get env
const ENV = process.env;

// global variable set by esbuild
declare const DEVELOPMENT: boolean;

// if you change this you also need to edit config for vitejs
export const WEB_ROOT: string = path.join(__dirname, "../../frontend", "dist");
export const IS_DEVELOPMENT: boolean = DEVELOPMENT; // esbuild gives us this one

// https
export const SERVER_HOST = "0.0.0.0";
export const PORT_API = 1081; // for dev/vitrejs proxy, if you change this remember to update vitejs config
export const PORT_WEB = 1080;
export const SERVER_API_ROOT = "/api"; // also needed for vitrejs proxy, if you change this remember to update vitejs config

// azure
export const AZURE_CLIENT_ID: string = toString(ENV.AZURE_CLIENT_ID, "unknown");
export const AZURE_TENDANT_ID: string = toString(ENV.AZURE_TENDANT_ID, "unknown");
export const AZURE_SCOPES: string[] = toArray(ENV.AZURE_SCOPES, ["unknown"]);
