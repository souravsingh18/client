import React from 'react'
import './style.css'

function Home(props) {
    return (
        <div className="grid-item">
            <h2>{props.name}</h2>
            <h1>{props.student || 0}</h1>
        </div>
    )
}

export default Home
