import React from 'react'
import CactusList from '../../components/CactusList/CactusList'
import "./Cactus.scss"

const Cactus = () => {
    return (
        <div>
            <h1 className="title_Cactus"></h1>
            <div className="container">
            <CactusList/>
            </div>
        </div>
    )
}

export default Cactus
