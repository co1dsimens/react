import React from 'react'
import './Modal.css'

export default class Modal extends React.Component{
    state={
        isOpen: false
    }
    render(){
        return(
            <React.Fragment>
                <button onClick ={() => this.setState ({isOpen:true})}>Open modal</button>

                {this.state.isOpen && (<div className='modal'>
                    <div className='modal_body'>
                        <h1>Welcom</h1>
                        <p>Lorem Ipsum is a"fish" text often used in print and web design. Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century. At that time, an unnamed printer created a large collection.</p>
                        <button onClick ={() => this.setState ({isOpen:false})}>Close</button>
                    </div>
                </div>  )}
            </React.Fragment>
        )
    }
}