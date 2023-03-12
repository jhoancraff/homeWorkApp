import React from 'react'
import { AllsContext } from './allsContex'
import './css/Allsearch.css'

function AllSearch(){
    const {searchValue,searchChangesValue} = React.useContext(AllsContext)
    const insertText = (event) => {
        console.log(event.target.value)
        searchChangesValue(event.target.value)
    }
    return(
        <div className='SearchContent'>
            <input 
                placeholder='Search Alls' 
                className='SearchInput'
                value={searchValue}
                onChange={insertText}
                

            />,
            
            
        </div>
        
    )
}


export {AllSearch}