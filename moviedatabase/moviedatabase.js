const movies = [
  {
    title: 'Frozen',
    rating: 4.5,
    watched: false,
  },
  {
    title: 'Mad Max',
    rating: 5,
    watched: true,
  },
  {
    title: 'In Brugge',
    rating: 3,
    watched: false,
  },
  {
    title: 'Baywatch',
    rating: '4 stars',
    watched: true,
  },
];

movies.forEach(movie => {
  console.log(buildString(movie));
});

function buildString(movie) {
  let result = 'You have ';
  if (movie.watched) {
    result += 'watched ';
  } else {
    result += 'not seen ';
  }
  result += `"${movie.title}" - `;
  result += `${movie.rating} stars`;
  return result;
}
