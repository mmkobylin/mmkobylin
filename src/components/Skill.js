import React from 'react'

const Skill = ( { list, title } ) => { 

    return (
        <div className="box">
        {/* <span></span> */}
            <div className="card-content">
                <h3>{ title } </h3>
                <ul className="list">
                    { list.map( ( value, key ) => 
                        <li key = { key }> { value } </li>
                    ) }
                </ul>
             </div>
        </div> 
    )
}

export default Skill