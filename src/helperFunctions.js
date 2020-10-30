export const votingClass = (details) => {
  const vote = details.vote_average;
  if (Number(vote) >= 7.5) {
    return `__genreGood`;
  } else if (Number(vote) < 7.5 && Number(vote) >= 5) {
    return "__genreMedium";
  } else {
    return "__genreBad";
  }
};

export const movieSearch = (
  e,
  search,
  setProgress,
  progress,
  setMovieList,
  setMovieFilter,
  setSearch
) => {
  const apiKey = "d2669e845450953087f55277f8eadfaf";
  e.preventDefault();
  setProgress(progress + 50);
  fetch(
    `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=${search}`
  )
    .then((res) => res.json())
    .then((data) => {
      setMovieList(data);
      setMovieFilter("");
      setTimeout(() => {
        setProgress(progress + 100);
      }, 500);
    });

  setSearch("");
};

export const filterFunction = (
  e,
  setProgress,
  progress,
  setMovieList,
  setMovieFilter
) => {
  const apiKey = "d2669e845450953087f55277f8eadfaf";
  fetch(
    `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${apiKey}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then(async (data) => {
      setMovieList(data);
      setMovieFilter(e.target.value);
      setProgress(progress + 50);
      setTimeout(() => {
        setProgress(progress + 100);
      }, 500);
    });
};
