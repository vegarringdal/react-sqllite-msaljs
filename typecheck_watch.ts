import { TypeChecker } from "esbuild-helpers";

const frontend = TypeChecker({
    basePath: "./frontend",
    name: "checker_frontend",
    shortenFilenames: false,
    tsConfig: "./tsconfig.json"
});

frontend.printSettings();
frontend.inspectAndPrint();
frontend.worker_watch(["./"]);

const backend = TypeChecker({
    basePath: "./backend",
    name: "checker_backend",
    shortenFilenames: false,
    tsConfig: "./tsconfig.json"
});

backend.printSettings();
backend.inspectAndPrint();
backend.worker_watch(["./"]);
