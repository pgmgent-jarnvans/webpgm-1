const album = {
  name: 'Giants Of All Sizes',
  publicationYear: 2019,
  genres: ['Alternative', 'Pop', 'Rock', 'Indy'],
  tracks: [
    {
      title: 'Dexter & Sinister',
      duration: 399,
    },
    {
      title: 'Seven Veils',
      duration: 276,
    },
    {
      title: 'Empires',
      duration: 239,
    },
    {
      title: 'The Delayed 3:15',
      duration: 204,
    },
    {
      title: 'White Noise White Heat',
      duration: 236,
    },
    {
      title: 'Doldrums',
      duration: 182,
    },
    {
      title: 'My Trouble',
      duration: 318,
    },
    {
      title: 'On Deronda Road',
      duration: 242,
    },
    {
      title: 'Weightless',
      duration: 285,
    },
  ],
  duration: () => {
    let totalTime = 0;
    album.tracks.forEach(track => {
      totalTime += track.duration;
    })
    return totalTime;
  },
};

const showAlbumInfo = album => {
  let tracklist = '', output = '';

  album.tracks.forEach((track, index) => {
    tracklist += `
    ${index + 1}       [${convertSecInMinSec(track.duration)}]  ${track.title}`;
  })

  output = `
    ==============================================
    Album: ${album.title}
    ==============================================
    Year:           ${album.publicationYear}
    Artist:         Elbow
    Genres:         ${album.genres.toString()}
    Duration:       ${convertSecInMinSec(album.duration())}
    ----------------------------------------------
    Track list
    ----------------------------------------------
    ${tracklist}
    ==============================================
  `;

  return output;
}

const convertSecInMinSec = sec => {
  const minute = Math.floor(sec / 60);
  sec %= 60;
  sec = (sec < 10) ?  '0' + sec : sec;
  return `${minute}:${sec}`
}


console.log(showAlbumInfo(album))