import React from 'react';

export default class extends React.Component {
	constructor(){
		super();
	}

	render() {
		const album = this.props.album;
		const songs = album.songs.map(song => {
			const artists = song.artists.map(artist => {
				return artist.name;
			}).join(", ");

			return(
				 <tr key={song.id}>
			        <td>
			          <button className="btn btn-default btn-xs" onClick={() => this.props.start(song)}>
			            <span className="glyphicon glyphicon-play"></span>
			          </button>
			        </td>
			        <td>{song.name}</td>
			        <td>{artists}</td>
			        <td>{song.genre}</td>
			      </tr>
			)
		})

		return (
			<div className="album col-xs-10">
			  <div>
			    <h3>{album.name}</h3>
			    <img src={album.image} className="img-thumbnail" />
			  </div>
			  <table className='table'>
			    <thead>
			      <tr>
			        <th></th>
			        <th>Name</th>
			        <th>Artists</th>
			        <th>Genre</th>
			      </tr>
			    </thead>
			    <tbody>
			    	{songs}
			    </tbody>
			  </table>
			</div>
		)
	}
}

