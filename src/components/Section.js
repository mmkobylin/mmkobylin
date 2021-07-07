import React from 'react'

const Section = ( { message, info } ) => {

    return (
        <section className="section" id = { info } >
            <p className = 'about_me' > { message } </p>
        </section>
    )
}

export default Section


