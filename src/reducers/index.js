import { combineReducers } from "redux";
import songs from "./Songs";
import song from "./SelectedSong";

export default combineReducers({
	songs,
	song
});
