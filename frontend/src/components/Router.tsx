import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "../routes/Welcome";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Router() {
    return (
        <BrowserRouter>
            <div className="flex flex-col h-full">
                <Header />
                <div className="flex flex-row h-full mt-2">
                    <Routes>
                        <Route path="*" element={<Welcome />}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
