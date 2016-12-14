import React from 'react';



export default function Albums(props) {
	


	const albumTitles = props.albums.map((album) => {return (
		<div className="col-xs-4" key={album.id}>
	      <a className="thumbnail" href="#" onClick={() => props.handleClick(album)}>
	        <img src={album.image} />
	        <div className="caption">
	          <h5>
	            <span>{album.name}</span>
	          </h5>
	          <small>{album.songs.length} songs</small>
	        </div>
	      </a>
	    </div>)

	});

	return (
		<div className="col-xs-10">
		  <h3>Albums</h3>
		  <div className="row">
		  	{albumTitles}
		  </div>
		</div>
	)
}

