import React, {Component} from 'react';
import './SideComponent.css';

class Games extends Component{
    render(){
        return(
            <div id="games" className="side-component">
                <i className="games-icon fas fa-gamepad"></i>
                <h3 id="games-text">Games</h3>
            </div>
        );
    }
}

export default Games;