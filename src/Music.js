import React, {Component} from 'react';
import Songs from './Songs';
import './Music.css';
import './Screen.css';
import Artists from './Artists';
import Albums from './Albums';

class Music extends Component{

    // alternate way of selecting music-menu elements by clicking on the element on the screen itself
    constructor(props){
        super(props);
        this.state = {
            showSongs: false,
            showArtists: false,
            showAlbums: false
        };
        this.handleclickSongs = this.handleclickSongs.bind(this);
        this.handleclickArtists = this.handleclickArtists.bind(this);
        this.handleclickAlbums = this.handleclickAlbums.bind(this);
    }

    handleclickSongs(){
        this.setState({
            showSongs: true,
            showArtists: false,
            showAlbums: false,
        });
    }

    handleclickArtists(){
        this.setState({
            showSongs: false,
            showArtists: true,
            showAlbums: false,
        });
    }

    handleclickAlbums(){
        this.setState({
            showSongs: false,
            showArtists: false,
            showAlbums: true,
        });
    }

    // -----------------------------------------------------------------

    render(){
        const {showSongs, showArtists, showAlbums} = this.state;
        const musicComponent = showSongs || showArtists || showAlbums || (this.props.selectedFromMusicMenu !== "")
        return(
            <div className="music">
                <div className={musicComponent ? "new-component" : "side-menu"}>
                    {!musicComponent && <p>Music</p>}
                    
                    {musicComponent ? (((this.props.selectedFromMusicMenu === "allSongs") || showSongs) && <Songs />) : <button id="Songs" className={musicComponent ? "new-component" : "btn"} onClick={this.handleclickSongs}> All Songs   
                    </button>}

                    {musicComponent ? (((this.props.selectedFromMusicMenu === "artists") || showArtists) && <Artists />) : <button id="Artists" className={musicComponent ? "new-component" : "btn"} onClick={this.handleclickArtists}> Artists  
                    </button>}

                    {musicComponent ? (((this.props.selectedFromMusicMenu === "albums") || showAlbums) && <Albums />) : <button id="Albums" className={musicComponent ? "new-component" : "btn"} onClick={this.handleclickAlbums}> Albums  
                    </button>}   
                </div>
            </div>

        );
    }
}

export default Music;