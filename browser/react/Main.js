import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum';
import axios from 'axios';

export default class extends React.Component {
	constructor() {
		super();

		this.state = {
			albums: [],
			selectedAlbum: {}
		};

		this.handleClick = this.handleClick.bind(this);	
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

	render() { 

		const albumsView = <Albums albums={this.state.albums} handleClick={this.handleClick}/>;

		const singleAlbumView = <SingleAlbum album={this.state.selectedAlbum}/>;

		return ( 
			<div id="main" className="container-fluid">

				<Sidebar /> 

				{this.state.selectedAlbum.id ? singleAlbumView : albumsView}
				

				<Footer />
			</div>
		);
	};
}




