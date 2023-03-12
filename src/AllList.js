import React from "react"
import './css/AllList.css'


function AllList(props){
    return(
        <section className='section-homework'>
            <ul className='list-homework'>
                {props.children}
            </ul>
        </section>
    )

}

export {AllList}