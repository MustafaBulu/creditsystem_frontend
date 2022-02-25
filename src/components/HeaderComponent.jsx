import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state= {

        }

    }


    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 
                    <div> <a href="https://github.com/MustafaBulu?tab=repositories" className="navbar-brand">Credit App</a></div>
                    </nav>
                </header>

            </div>
        )
    }


}

export default HeaderComponent