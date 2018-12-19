import React from "react";
import { connect } from "react-redux";
import { songsList, currentSong } from "../actions";

class SongsList extends React.Component {
	componentDidMount() {
		this.props.songsList();
	}
	renderList = () => {
		return this.props.songs.map((item, index) => (
			<div className="item" key={index}>
				<div className="right floated content">
					<button
						className="button ui primary"
						onClick={() => this.props.currentSong(item)}
					>
						select
					</button>
				</div>
				<div className="content">{item.name}</div>
			</div>
		));
	};
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

export default connect(
	state => ({ songs: state.songs }),
	{ songsList, currentSong }
)(SongsList);
