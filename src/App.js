import React from 'react'
import ReactDOM from 'react-dom'

const header = () => {
    return(
        <div className="header">
            <div className="logo-item">
                <img src="file:///C:/Users/HET/Downloads/khana-khajana-high-resolution-logo-black-transparent.svg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)