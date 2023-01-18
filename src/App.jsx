import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer"

export default function App(){
    return (
        <div className="card">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}