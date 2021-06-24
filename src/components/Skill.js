import React from 'react'

const Skill = ( { list, title } ) => { 

    return (
        <div className="box">
            <span></span>
            <div className="card-content">
                <h2>{ title } </h2>
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