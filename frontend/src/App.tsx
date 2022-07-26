import React from "react";
import "./App.css";
import { AuthLoader } from "./components/AuthLoader";
import { ErrorDialog } from "./components/ErrorDialog";
import { LoadingDialog } from "./components/LoadingDialog";
import { Router } from "./components/Router";

export function App() {
    return (
        <div className="app bg-gray-100 dark:bg-gray-800 dark:text-white">
            <LoadingDialog />
            <ErrorDialog />
            <AuthLoader>
                <Router />
            </AuthLoader>
        </div>
    );
}

export default App;
