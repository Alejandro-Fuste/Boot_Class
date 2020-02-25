const songs = $('ul li');
// console.log(songs);

const songList = [];

for (const song of songs) {
	songList.push(song);
	songs.addClass('class');

	console.log(song);
}
console.log(songList);
