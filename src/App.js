import React from 'react';
import { ApiUI } from './AppUI';
import { AllsProvide } from './allsContex';



//const defaultAlls = [
//  
//    {text: 'Wash dishes', completed: true},
//    {text: 'Drink water', completed: false},
//    {text: 'Run in the morning', completed: true},
//    {text: 'Clear bed', completed:false},  
//  
//]




function App(){
  

  
  return (
    
    <AllsProvide>
      <ApiUI/>
    </AllsProvide>
   
  )
}

export default App;
