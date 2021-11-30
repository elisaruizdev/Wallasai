import React from 'react'
import CarnivorousList from '../../components/CarnivorousList/CarnivorousList'
import "./CarnivorousPlants.scss"

const CarnivorousPlants = () => {
    return (
        <div>
            <h1 className="title_Carnivorous"></h1>
            <div className="container">
            <CarnivorousList/>
            </div>
        </div>
    )
}

export default CarnivorousPlants
