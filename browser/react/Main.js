import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum';
import axios from 'axios';

const audio = document.createElement('audio');

export default class extends React.Component {
	constructor() {
		super();

		this.state = {
			albums: [],
			selectedAlbum: {},
			currentSong: {},
			isPlaying: false,
			progress: 0
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleAlbumsClick = this.handleAlbumsClick.bind(this);	
		this.start = this.start.bind(this);
		this.pause = this.pause.bind(this);
	};
	
	componentDidMount() {
		axios.get('/api/albums')
		.then(response => (response.data))
		.then(albums => {
			const albumsWithImage = albums.map((album) => {
				album.image = `/api/albums/${album.id}/image`;
				return album;
			});
			this.setState({albums: albumsWithImage})
		});

		audio.addEventListener('timeupdate', () => {
			this.setState({
				progress: 100 * audio.currentTime / audio.duration
			});
		});	
	}

	handleClick(album){
		const albumId = album.id;
		axios.get('/api/albums/' + albumId)
		.then(res => res.data)
		.then(returnedAlbum => {
			returnedAlbum.image = `/api/albums/${returnedAlbum.id}/image`;
			this.setState({selectedAlbum: returnedAlbum});
		});
	}

	handleAlbumsClick() {
		this.setState({selectedAlbum: {}});
	}

	start(song) {
		this.setState({currentSong: song, isPlaying: true});
		audio.src = song.url;
		audio.load();
		audio.play();
	}

	pause() {
		audio.pause();
		this.setState({isPlaying: false});
	}

	render() { 

		const albumsView = <Albums albums={this.state.albums} handleClick={this.handleClick}/>;

		const singleAlbumView = <SingleAlbum album={this.state.selectedAlbum} start={this.start} pause = {this.pause} currentSong={this.state.currentSong} isPlaying = {this.state.isPlaying}/>;

		const footerView = <Footer album={this.state.selectedAlbum} currentSong = {this.state.currentSong} isPlaying = {this.state.isPlaying} start = {this.start} pause = {this.pause} progress= {this.state.progress} />;


		return ( 
			<div id="main" className="container-fluid">

				<Sidebar handleAlbumsClick = {this.handleAlbumsClick} /> 

				{this.state.selectedAlbum.id ? singleAlbumView : albumsView}
				
				{this.state.currentSong.id ? footerView : null}

			</div>
		);
	};
}




