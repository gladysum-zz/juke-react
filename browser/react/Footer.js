import React from 'react';

export default function Footer(props){
	const showPause = <span className="glyphicon glyphicon-pause" onClick = {props.pause}></span>

	const showPlay = <span className="glyphicon glyphicon-play" onClick = {() => props.start(props.currentSong)}></span>

	return (


		 <div>
		       <footer>
		         <div className="pull-left">
		           <button className="btn btn-default">
		             <span className="glyphicon glyphicon-step-backward"></span>
		           </button>
		           <button className="btn btn-default">
		            {props.isPlaying ? showPause : showPlay} 
		           </button>
		           <button className="btn btn-default">
		             <span className="glyphicon glyphicon-step-forward"></span>
		           </button>
		         </div>
		         <div className="bar">
		           <div className="progress">
		             <div className="progress-bar"></div>
		           </div>
		         </div>
		       </footer>


		     </div>
	)
}


