import React from 'react';

export default function Footer(props){
	const showPause = <span className="glyphicon glyphicon-pause" onClick = {props.pause}></span>

	const showPlay = <span className="glyphicon glyphicon-play" onClick = {() => props.start(props.currentSong)}></span>

	const songs = props.album.songs;

	const playPrevious = () => {
		let previousSongIndex = songs.indexOf(props.currentSong) - 1;

		if (previousSongIndex < 0) {
			previousSongIndex = songs.length - 1;
		}

		const previousSong = songs[previousSongIndex];

		props.start(previousSong);
	}

	const playNext = () => {
		let nextSongIndex = songs.indexOf(props.currentSong) +1;

		if (nextSongIndex >= songs.length) {
			nextSongIndex = 0;
		}
		const nextSong = songs[nextSongIndex];
		props.start(nextSong);
	}
console.log(props.progress);
	return (
		 <div>
		       <footer>
		         <div className="pull-left">
		           <button className="btn btn-default">
		             <span className="glyphicon glyphicon-step-backward" onClick = {playPrevious}></span>
		           </button>
		           <button className="btn btn-default">
		            {props.isPlaying ? showPause : showPlay} 
		           </button>
		           <button className="btn btn-default">
		             <span className="glyphicon glyphicon-step-forward" onClick = {playNext}></span>
		           </button>
		         </div>
		         <div className="bar">
		           <div className="progress">
		             <div className="progress-bar" style = {{width: `${props.progress}%`}}></div>
		           </div>
		         </div>
		       </footer>


		     </div>
	)
}


