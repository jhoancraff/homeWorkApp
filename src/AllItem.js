import React from 'react'
import './css/AllItems.css'

function AllItem(props){
    return(
        
        <li className='list-homework__work'>
            <span 
                className={`list-item_V ${props.completed && 'icon-activate'}`}
                onClick={props.onComplete}>
                    
                    <p className='img-check'></p>
            </span>
            <p className={`list-text ${props.completed && 'list-text__activate'}`}
            >
                {props.text}
            </p>
            <span className='list-item__X'
            onClick={props.onDelete}>
                <p className='img-trash'></p>
            </span>

        </li>
    )
    
    
} 

export {AllItem}