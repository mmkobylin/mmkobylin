import React, { Component } from 'react'

export class Scroll extends Component {

    constructor( props ) {
        super( props ) 
        
        this.state = { classes: true }   

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        window.requestAnimationFrame(() => {

            if ( window.scrollY > 0 ) {
                this.setState( { classes : false } ) 
            }
            else 
            this.setState( { classes : true } ) 
        });
    };

    render() {
        let { classes } = this.state;

        return (
            <nav
            className = { classes ? "neon" : "scrolling" }
            > scrolling
            </nav>
        );
    }
}

export default Scroll
