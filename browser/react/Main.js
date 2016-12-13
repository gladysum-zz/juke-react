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
			songs: []
		};	
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

	render() { 
console.log(this.state.songs);
		return ( 
			<div id="main" className="container-fluid">

				<Sidebar /> 
					 
				<Albums albums={this.state.albums}/>

				<SingleAlbum />

				<Footer />
			</div>
		);
	};
}


