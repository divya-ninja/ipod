import React, {Component} from 'react';
import Screen from './Screen';
import Keypad from './Keypad';
import ZingTouch from 'zingtouch';
import './Screen.css';
import './Ipod.css';

class Ipod extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainMenu: false,
            coverflow: false,
            music: false,
            games: false,
            settings: false,
            selected: "",
            musicMenu: false,
            allSongs: false,
            artists: false,
            albums: false,
            selectedFromMusicMenu: ""
        }
        // binding the functions for keypad buttons
        this.handleclickMenu = this.handleclickMenu.bind(this);
        this.handleRotation = this.handleRotation.bind(this);
        this.handleclickSelect = this.handleclickSelect.bind(this);
        this.handleclickBackward = this.handleclickBackward.bind(this);
        this.handleclickForward = this.handleclickForward.bind(this);
        this.handleclickPlayPause = this.handleclickPlayPause.bind(this);

        // binding the functions for selecting from main-menu
        this.selectCoverflow = this.selectCoverflow.bind(this);
        this.selectMusic = this.selectMusic.bind(this);
        this.selectSettings = this.selectSettings.bind(this);
        this.selectGames = this.selectGames.bind(this);

        // binding the functions for selecting from music-menu
        this.selectAllSongs = this.selectAllSongs.bind(this);
        this.selectArtists = this.selectArtists.bind(this);
        this.selectAlbums = this.selectAlbums.bind(this);
    }

    // function for menu button
    handleclickMenu(){
        if(!this.state.mainMenu){
            this.setState({
                mainMenu: true
            });
        }else if(this.state.selected === ""){
            this.setState({
                mainMenu: false
            });
        }

        if(this.state.selected !== "" && this.state.selected !== "music"){
            this.setState({
                selected: "",
                musicMenu: false,
                selectedFromMusicMenu: ""
            });
        }

        if(this.state.selected === "music" && this.state.selectedFromMusicMenu === ""){
            this.setState({
                selected: ""
            });
        }

        if(this.state.selected === "" && this.state.selectedFromMusicMenu === ""){
            this.setState({
                musicMenu: false
            });
        }

        if(this.state.selectedFromMusicMenu !== "" && this.state.selected === "music"){
            this.setState({
                selectedFromMusicMenu: "",
                allSongs: false,
                artists: false,
                albums: false,
                musicMenu: false
            });
        }

        if(this.state.selectedFromMusicMenu !== "" && this.state.musicMenu){
            this.setState({
                selectedFromMusicMenu: "",
                allSongs: false,
                artists: false,
                albums: false,
                selected: ""
            });
        }

         
    }

    // function for backward button
    handleclickBackward(){
        // fetching main-menu list elements
        let coverflow = document.getElementById('Coverflow');
        let music = document.getElementById('Music');
        let games = document.getElementById('Games');
        let settings = document.getElementById('Settings');

        if(this.state.mainMenu && this.state.selected === ""){
            if(this.state.music){
                this.selectCoverflow(coverflow, music, games, settings);
            }else if(this.state.games){
                this.selectMusic(coverflow, music, games, settings);
            }else if(this.state.settings){
                this.selectGames(coverflow, music, games, settings);
            }else{
                this.selectSettings(coverflow, music, games, settings);
            }
        }

        // fetching music-menu list items
        let allSongs = document.getElementById('Songs');
        let artists = document.getElementById('Artists');
        let albums = document.getElementById('Albums');

        if((this.state.selected === "music") && this.state.selectedFromMusicMenu === ""){
            if(this.state.albums){
                this.selectArtists(allSongs, artists, albums);
            }else if(this.state.artists){
                this.selectAllSongs(allSongs, artists, albums);
            }else{
                this.selectAlbums(allSongs, artists, albums);
            }
        }
        
    }

    // function for forward button
    handleclickForward(){
        // fetching list elements
        let coverflow = document.getElementById('Coverflow');
        let music = document.getElementById('Music');
        let games = document.getElementById('Games');
        let settings = document.getElementById('Settings');

        if(this.state.mainMenu && this.state.selected === ""){
            if(this.state.coverflow){
                this.selectMusic(coverflow, music, games, settings);
            }else if(this.state.music){
                this.selectGames(coverflow, music, games, settings);
            }else if(this.state.games){
                this.selectSettings(coverflow, music, games, settings);
            }else{
                this.selectCoverflow(coverflow, music, games, settings);
            }
        }

        // fetching music-menu list items
        let allSongs = document.getElementById('Songs');
        let artists = document.getElementById('Artists');
        let albums = document.getElementById('Albums');

        if(this.state.selected === "music" && this.state.selectedFromMusicMenu === ""){
            if(this.state.allSongs){
                this.selectArtists(allSongs, artists, albums);
            }else if(this.state.artists){
                this.selectAlbums(allSongs, artists, albums);
            }else{
                this.selectAllSongs(allSongs, artists, albums);
            }
        }
        
    }

    // function for rendering the chosen component
    handleclickSelect(){
        if(this.state.coverflow){
            this.setState({
                selected: "coverflow"
            });
        }else if(this.state.music){
            this.setState({
                selected: "music",
                musicMenu: false
            });
        }else if(this.state.games){
            this.setState({
                selected: "games"
            });
        }else if(this.state.settings){
            this.setState({
                selected: "settings"
            });
        }
        if(this.state.allSongs){
            this.setState({
                selectedFromMusicMenu: "allSongs",
            });
        }else if(this.state.artists){
            this.setState({
                selectedFromMusicMenu: "artists"
            });
        }else if(this.state.albums){
            this.setState({
                selectedFromMusicMenu: "albums"
            });
        }
    }

    // function to play/pause the song
    handleclickPlayPause(){
        let audio = document.getElementById('audio-player');

        if(this.state.selectedFromMusicMenu === "allSongs"){
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
        }
        
    }

    // function for selecting coverflow
    selectCoverflow(coverflow, music, games, settings){
        this.setState({
            coverflow: true,
            music: false,
            games: false,
            settings: false,
        });

        coverflow.classList = 'btn select';
        music.classList = 'btn unselect';
        games.classList = 'btn unselect';
        settings.classList = 'btn unselect';
    }

    // function for selecting music
    selectMusic(coverflow, music, games, settings){
        this.setState({
            coverflow: false,
            music: true,
            games: false,
            settings: false
        });

        coverflow.classList = 'btn unselect';
        music.classList = 'btn select';
        games.classList = 'btn unselect';
        settings.classList = 'btn unselect';
    }

    // function for selecting games
    selectGames(coverflow, music, games, settings){
        this.setState({
            coverflow: false,
            music: false,
            games: true,
            settings: false
        });

        coverflow.classList = 'btn unselect';
        music.classList = 'btn unselect';
        games.classList = 'btn select';
        settings.classList = 'btn unselect';
    }

    // function for selecting settings
    selectSettings(coverflow, music, games, settings){
        this.setState({
            coverflow: false,
            music: false,
            games: false,
            settings: true
        });

        coverflow.classList = 'btn unselect';
        music.classList = 'btn unselect';
        games.classList = 'btn unselect';
        settings.classList = 'btn select';
    }

    // function for selecting all-songs component in music-menu
    selectAllSongs(allSongs, artists, albums){
        this.setState({
            allSongs: true,
            artists: false,
            albums: false
        });

        allSongs.classList = 'btn select';
        artists.classList = 'btn unselect';
        albums.classList = 'btn unselect';
    }

    // function for selecting artists component in music-menu
    selectArtists(allSongs, artists, albums){
        this.setState({
            allSongs: false,
            artists: true,
            albums: false
        });

        allSongs.classList = 'btn unselect';
        artists.classList = 'btn select';
        albums.classList = 'btn unselect';
    }

    // function for selecting albums component in music-menu
    selectAlbums(allSongs, artists, albums){
        this.setState({
            allSongs: false,
            artists: false,
            albums: true
        });

        allSongs.classList = 'btn unselect';
        artists.classList = 'btn unselect';
        albums.classList = 'btn select';
    }

    // function for handling the rotation of the navigator wheel
    handleRotation(){
        const target = document.getElementById('Navigator');
        const region = new ZingTouch.Region(target);
        let angle = 0;

        // binding rotate event to Navigator div i.e target
        region.bind(target, 'rotate', (e) => {
            angle += e.detail.distanceFromLast;
            
            // fetching main-menu list elements
            let coverflow = document.getElementById('Coverflow');
            let music = document.getElementById('Music');
            let games = document.getElementById('Games');
            let settings = document.getElementById('Settings');

            if(this.state.mainMenu && this.state.selected === ""){
                // selecting coverflow
                if(angle > 0 && angle <= 60){
                    this.selectCoverflow(coverflow, music, games, settings);
                }

                // selecting music
                if(angle > 60 && angle <= 120){
                    this.selectMusic(coverflow, music, games, settings);
                }
                
                // selecting games
                if(angle > 120 && angle <= 180){
                    this.selectGames(coverflow, music, games, settings);
                }

                // selecting settings
                if(angle > 180 && angle <= 240){
                    this.selectSettings(coverflow, music, games, settings);
                }
            }

            // fetching music-menu list items
            let allSongs = document.getElementById('Songs');
            let artists = document.getElementById('Artists');
            let albums = document.getElementById('Albums');

            if(this.state.selected === "music" && this.state.selectedFromMusicMenu === ""){
                // selecting all songs
                if(angle > 0 && angle <= 60){
                    this.selectAllSongs(allSongs, artists, albums);
                }

                // selecting artists
                if(angle > 60 && angle <= 120){
                    this.selectArtists(allSongs, artists, albums);
                }
                
                // selecting albums
                if(angle > 120 && angle <= 180){
                    this.selectAlbums(allSongs, artists, albums);
                }
            }
        });
    }

    render(){
        return(
            <div className = "ipod">
                <Screen 
                    mainMenu = {this.state.mainMenu}
                    musicMenu = {this.state.musicMenu}
                    selected = {this.state.selected}
                    selectedFromMusicMenu = {this.state.selectedFromMusicMenu}
                />
                <Keypad 
                    handleclickMenu = {this.handleclickMenu}
                    handleRotation = {this.handleRotation}
                    handleclickSelect = {this.handleclickSelect}
                    handleclickBackward = {this.handleclickBackward}
                    handleclickForward = {this.handleclickForward}
                    handleclickPlayPause = {this.handleclickPlayPause}
                />
            </div>
        );
    }
}

export default Ipod;