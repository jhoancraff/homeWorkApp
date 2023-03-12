import React from 'react'
import { AllsContext } from './allsContex';
import { AllCounter } from './AllCounter';
import { AllSearch } from './AllSearch';
import { AllList } from './AllList';
import { AllItem } from './AllItem';
import { AllForm } from './AllsForm';
import { CreateButtonAll } from './CreateButtonAll';
import { Modal } from './Modal';


function ApiUI(){
    const {
      error, 
      loading,
      searchedAlls,
      completeAlls,
      deleteAll,
      openModal,
      setOpenModal
    } = React.useContext(AllsContext)

    return(
      <React.Fragment>

      <AllCounter/>
      <AllSearch/>
      
     
          <AllList>
          {error && <p>stop, we have a problem</p>}
          {loading && <p>it is loading</p>}
          {(!loading && !searchedAlls.length) && <p>You can create your first Alls</p> }
          
          {searchedAlls.map(item =>(
            <AllItem 
              key={item.text} 
              text={item.text} 
              completed={item.completed} 
              onComplete={()=> completeAlls(item.text)}
              onDelete={()=> deleteAll(item.text)}
              
            /> )
              
          )}
        </AllList>
        
        {openModal && (
          <Modal>
            <AllForm></AllForm>
          
          </Modal>)}
        <CreateButtonAll
          setOpenModal={setOpenModal}
        />
      
      
      
    
    </React.Fragment>
    )
}


export {ApiUI}