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

			const playButton = <span className="glyphicon glyphicon-play" onClick={() => this.props.start(song)}></span>;

			const pauseButton = <span className="glyphicon glyphicon-pause" onClick={this.props.pause}></span>;		


			return(
				 <tr key={song.id} className={song.id===this.props.currentSong.id ? "active" : null}>
			        <td>
			          <button className="btn btn-default btn-xs">
			            {song.id!==this.props.currentSong.id || !this.props.isPlaying ? playButton : pauseButton}
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

