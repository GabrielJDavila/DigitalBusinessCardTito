import React from "react"
import ReactDOM from "react-dom"
import Card from "./components/Card"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="app-container">
            <Card />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}