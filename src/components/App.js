import React from "react";
import SongsList from "./SongsList";
import Song from "./Song";

const App = props => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongsList />
				</div>
				<div className="column eight wide">
					<div className="ui items">
						<Song />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
