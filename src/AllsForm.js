import React from 'react'
import { AllsContext } from './allsContex'
import './css/allsForm.css'


function AllForm(){
    const [newAllValue, setNewAllValue] = React.useState('') 
    const {
        AddAlls,
        setOpenModal
    } = React.useContext(AllsContext )

    const onChange = (event) =>{
        setNewAllValue(event.target.value)
    }

    const addText = (event) => {
        event.preventDefault()
        AddAlls(newAllValue)
        setOpenModal()
    }
    const cancelText = () =>{
        setOpenModal(false)
    }
    return(
        <form onSubmit={addText} className='add-form'>
            <label className='title-form'>Write your new homework</label>
            <textarea
             placeholder='plat soccer' 
             value={newAllValue} 
             onChange={onChange}
             className='textarea-form'
             >
                
             </textarea>
            <div className='container-buttons__form'>
                <button 
                  
                  className='button-form button-form__1'        
                >
                    Add Text
                </button>
                <button 
                    type='button'
                    onClick={cancelText}
                    className='button-form button-form__2'
                >
                    Cancel Text
                </button>
            </div>
        </form>
    )
}

export{AllForm}