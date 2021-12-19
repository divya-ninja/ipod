import React, {Component} from 'react';
import './Screen.css';
import Settings from './Settings';
import Music from './Music';
import Games from './Games';
import Coverflow from './Coverflow';

class SideMenu extends Component{

    // alternate way of selecting main-menu elements by clicking on the element on the screen itself
    constructor(props){
        super(props);
        this.state = {
            showCoverflow: false,
            showMusic: false,
            showGames: false,
            showSettings: false,
        };
        this.handleclickCoverflow = this.handleclickCoverflow.bind(this);
        this.handleclickMusic = this.handleclickMusic.bind(this);
        this.handleclickGames = this.handleclickGames.bind(this);
        this.handleclickSettings = this.handleclickSettings.bind(this);
    }

    handleclickCoverflow(){
        this.setState({
            showCoverflow: true,
            showMusic: false,
            showGames: false,
            showSettings: false,
        });
    }

    handleclickMusic(){
        this.setState({
            showMusic: true,
            showCoverflow: false,
            showGames: false,
            showSettings: false
        });
    }

    handleclickGames(){
        this.setState({
            showGames: true,
            showMusic: false,
            showCoverflow: false,
            showSettings: false
        });
    }

    handleclickSettings(){
        this.setState({
            showSettings: true,
            showCoverflow: false,
            showMusic: false,
            showGames: false,
        });
    }

    // --------------------------------------------------

    render(){

        const {selected, musicMenu, selectedFromMusicMenu} = this.props;
        const {showCoverflow, showMusic, showGames, showSettings} = this.state;
        const newComponent = showCoverflow || showMusic || showGames || showSettings || (selected !== "")
        return(
    
                <div className={newComponent ? "new-component" : "side-menu"}>
                    {!newComponent && <p>iPod</p>}
                    {newComponent ?  (((selected === "coverflow") || showCoverflow) && <Coverflow />) : <button id="Coverflow" className={newComponent ? "new-component" : "btn"} onClick={this.handleclickCoverflow}> Cover Flow   
                    </button>}

                    {newComponent ? (((selected === "music" || musicMenu) || showMusic) && <Music selectedFromMusicMenu = {selectedFromMusicMenu} selected = {selected} musicMenu ={musicMenu}/>) : <button id="Music" className={newComponent ? "new-component" : "btn"} onClick={this.handleclickMusic}> Music  
                    </button>}

                    {newComponent ? (((selected === "games") || showGames) && <Games />) : <button id="Games" className={newComponent ? "new-component" : "btn"} onClick={this.handleclickGames}> Games  
                    </button>}

                    {newComponent ? (((selected === "settings") || showSettings) && <Settings />) : <button id="Settings" className={newComponent ? "new-component" : "btn"} onClick={this.handleclickSettings}> Settings  
                    </button>}   
                </div>

        );
    }
}

export default SideMenu;