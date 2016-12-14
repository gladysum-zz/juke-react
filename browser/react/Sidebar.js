import React from 'react';

export default function Sidebar(props){
	return (

		  <div className="col-xs-2">
		    <sidebar>
		      <img src="juke.svg" className="logo" />
		      <section>
		        <h4 className="menu-item active">
		          <a href="#" onClick = {() => props.handleAlbumsClick() }>ALBUMS</a>
		        </h4>
		      </section>
		    </sidebar>
		  </div>

	)
}

