import React, {Component} from 'react';
import './Keypad.css';

class Keypad extends Component{

    render(){
        const {handleclickMenu, handleRotation, handleclickSelect, handleclickBackward, handleclickForward, handleclickPlayPause} = this.props;
        return(
            <div className = "Keypad">
                <div id = "Navigator" onClick={handleRotation}>
                    <div className="menu" onClick={handleclickMenu}> MENU </div>
                    <i className="backward fas fa-fast-backward" onClick={handleclickBackward}></i>
                    <div id = "select" onClick={handleclickSelect}></div>
                    <i className="forward fas fa-fast-forward" onClick={handleclickForward}></i>
                    <i className="play-pause fas fa-play" onClick={handleclickPlayPause}></i>
                </div>
            </div>
        );
    }
}

export default Keypad;