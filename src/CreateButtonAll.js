import React from 'react'
import './css/CreateButtonAll.css'

function CreateButtonAll(props){
    const onClickButoon = () =>{
        props.setOpenModal(isTrue => !isTrue )
    }
    return(
        <div className={`content-button`}>
            <button 
            className={`button-create`} 
            onClick={onClickButoon}>
                +
            </button>
            
        </div>
    )
}

export {CreateButtonAll}