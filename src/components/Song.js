import React from "react";
import { connect } from "react-redux";
require("./styles/songs.css");

const Song = ({ song }) => {
	if (!song) {
		return <div>Please select a song</div>;
	}
	return (
		<div className="item">
			<div className="image">
				<img src={`/thumbnails/${song.title}.jpg`} alt={song.name} />
			</div>
			<div className="content">
				<a className="header" href="/">
					{song.name}
				</a>
				<div className="description">
					<audio src={`/songs/${song.name}.mp3`} controls autoPlay />
				</div>
			</div>
		</div>
	);
};

export default connect(state => ({ song: state.song }))(Song);
