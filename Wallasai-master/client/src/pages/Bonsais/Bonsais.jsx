import React from 'react'
import BonsaiList from '../../components/BonsaiList/BonsaliList'
import PlantList from '../../components/TreeList/TreeList'
import "./Bonsais.scss";
const Bonsais = () => {
    return (
        <div >
            <h1 className="title_Bonsai"></h1>
               <div className="container">
            <BonsaiList/>
            </div>
        </div>
    )
}

export default Bonsais
