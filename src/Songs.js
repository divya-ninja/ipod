import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audio from './songs/bts-black-swan.mp3';
import './Music.css';


class Songs extends Component{
    
    render(){
        return(
            <div className="songs">
                <div className="details">
                    <div className="song-image"></div>
                    <div className="song-details">Black Swan <br/> BTS</div>
                </div>
                <ReactAudioPlayer id="audio-player" className="audio"
                    src={audio}
                    autoplay
                    controls
                />
            </div>
        );
    }
}

export default Songs;