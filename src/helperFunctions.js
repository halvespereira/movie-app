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

const apiKey = "d2669e845450953087f55277f8eadfaf";

export const movieSearch = (
  e,
  search,
  setProgress,
  progress,
  setMovieList,
  setMovieFilter,
  setInputValue
) => {
  e.preventDefault();
  setProgress(progress + 50);
  fetch(
    `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=${search}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => {
      setMovieList(data);
      setMovieFilter("");
      setTimeout(() => {
        setProgress(progress + 100);
      }, 500);
    });

  setInputValue("");
};

export const filterFunction = (
  e,
  setProgress,
  progress,
  setMovieList,
  setMovieFilter,
  setSearch
) => {
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
  setSearch("");
};

export const paginationFetch = (
  e,
  search,
  progress,
  setProgress,
  setMovieList,
  setMovieFilter,
  movieFilter
) => {
  if (search) {
    setProgress(progress + 50);
    fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=${search}&language=en-US&page=${e.target.textContent}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
        setMovieFilter("");
        setTimeout(() => {
          setProgress(progress + 100);
        }, 500);
      })
      .catch((err) => console.log(err));
  } else {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieFilter}?api_key=${apiKey}&language=en-US&page=${e.target.textContent}`
    )
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        setMovieList(data);
        setProgress(progress + 50);
        setTimeout(() => {
          setProgress(progress + 100);
        }, 500);
      });
  }
};
