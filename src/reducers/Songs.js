import { SONGS } from "../actions";

export default function(state = [], action) {
	if (action.type === SONGS) {
		return [...state, ...action.payload];
	}
	return state;
}
