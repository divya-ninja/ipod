import React, {Component} from 'react';
import SideMenu from './SideMenu';
import './Screen.css';

class Screen extends Component{

    render(){
        const {mainMenu, musicMenu, selected, selectedFromMusicMenu} = this.props;
        return(
            <div className="screen">
                {(mainMenu) && <SideMenu 
                    selected = {selected}
                    selectedFromMusicMenu = {selectedFromMusicMenu}
                    musicMenu = {musicMenu}
                />}   
            </div>
        );
    }
}

export default Screen;