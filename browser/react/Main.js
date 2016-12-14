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
			currentSong: {}
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleAlbumsClick = this.handleAlbumsClick.bind(this);	
		this.start = this.start.bind(this);

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
		})	
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
		this.setState({currentSong: song});
		audio.src = song.url;
		audio.load();
		audio.play();
	}

	render() { 

		const albumsView = <Albums albums={this.state.albums} handleClick={this.handleClick}/>;

		const singleAlbumView = <SingleAlbum album={this.state.selectedAlbum} start={this.start} currentSong={this.state.currentSong}/>;

		return ( 
			<div id="main" className="container-fluid">

				<Sidebar handleAlbumsClick = {this.handleAlbumsClick} /> 

				{this.state.selectedAlbum.id ? singleAlbumView : albumsView}
				

				<Footer />
			</div>
		);
	};
}




