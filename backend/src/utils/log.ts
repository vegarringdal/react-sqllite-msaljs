import { IS_DEVELOPMENT } from "../config";

export function log(...msg: any) {
    if (IS_DEVELOPMENT) {
        console.log("   Info: ", ...msg);
    }
}

export function logStartup(...msg: any) {
    console.log("   Start: ", ...msg);
}

export function logError(...msg: any) {
    console.log("   Error: ", ...msg);
}

export function logLine(show: boolean) {
    if (show) console.log("--------------------------------------------------------------");
}
