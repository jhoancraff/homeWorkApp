import React from 'react';
import { AllsContext } from './allsContex';
import './css/AllCounter.css'


function AllCounter(){
    const {totalAll, completedTask} = React.useContext(AllsContext)
    return(
        <h2 className='titleHeard'>You have completed {completedTask} of  {totalAll} task </h2>
    )
}

export {AllCounter}