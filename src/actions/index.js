export const SONG_SELECTED = "SONGSELECTED";
export const SONGS = "SONGS";

export const currentSong = song => {
	return {
		type: SONG_SELECTED,
		payload: song
	};
};

export const songsList = () => {
	const OURSONGS = [
		{ title: "Taxiwala", name: "Maate Vinadhuga", duration: 4.05 },
		{ title: "Ekvillan", name: "Galliyan", duration: 4.15 },
		{
			title: "GeethaGovindham",
			name: "Inkem Inkem Inkem Kaavaale",
			duration: 4.35
		},
		{ title: "HappyNewYear", name: "India Waale", duration: 4.35 }
	];
	return {
		type: SONGS,
		payload: OURSONGS
	};
};
