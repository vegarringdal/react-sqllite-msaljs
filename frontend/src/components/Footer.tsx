import React from "react";

declare const VERSION: string;

export function Footer() {
    return (
        <footer className="block text-center p-1 m-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 ">
            <div className="flex">version {VERSION}</div>
        </footer>
    );
}
