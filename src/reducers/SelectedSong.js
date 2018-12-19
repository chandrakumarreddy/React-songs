import { SONG_SELECTED } from "../actions";

export default function(state = null, action) {
	if (action.type === SONG_SELECTED) {
		return action.payload;
	}
	return state;
}
