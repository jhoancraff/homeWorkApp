import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const AllsContext = React.createContext()

function AllsProvide(props){

    const {item:alls, saveItem:saveAlls, loading, error} = useLocalStorage('ALLS_V1', [])  

    const [searchValue, searchChangesValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    
    
    const completedTask = alls.filter(all => all.completed === true ).length
    const totalAll = alls.length

    let searchedAlls = []

    if(!searchValue.length >= 1){
      searchedAlls = alls
    }else{
      searchedAlls = alls.filter(all => {
        const textAll = all.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return textAll.includes(searchText)
      })
    }



    const completeAlls = (text) => {
      const allsIndex = alls.findIndex(all => all.text === text)

      const newAlls = [...alls]
      newAlls[allsIndex].completed = true
      saveAlls(newAlls)
    }
    const AddAlls = (text) => {
      

      const newAlls = [...alls]
      newAlls.push({
        completed:false,
        text
        })
      saveAlls(newAlls)
    }


    const deleteAll = (text) => {
      const allsIndex = alls.findIndex(all => all.text === text)

      const newAlls = [...alls]
      newAlls.splice(allsIndex,1)
      saveAlls(newAlls)
    }

    return(
        <AllsContext.Provider value={{
            error,
            loading,
            AddAlls,
            completedTask,
            totalAll,
            searchValue,
            searchChangesValue,
            searchedAlls,
            completeAlls,
            deleteAll,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </AllsContext.Provider>
        
    )
    
}

export {AllsContext, AllsProvide}