import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import App from "./App"

const Global = () => {
    return (
        <div className="global_wrapper">
            <Navbar />
            <div className='main'>
                <App />
            </div>

        </div>
    )
}

export default Global
