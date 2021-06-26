import React from 'react'

const Section = ( { message } ) => {

    return (
        <section className="section">
            <p className = 'about_me' > { message } </p>
        </section>
    )
}

export default Section
