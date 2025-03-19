export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

const getDate = () => {
  const today: Date = new Date();

  const yyyy: number = today.getFullYear();
  let mm: number | string = today.getMonth() + 1; // Months are zero-based
  let dd: number | string = today.getDate();

  if (mm < 10) mm = "0" + mm;
  if (dd < 10) dd = "0" + dd;

  return `${yyyy}-${mm}-${dd}`;
};

export const fetchMovies = async ({
  query,
  popular,
}: {
  query?: string;
  popular?: boolean;
}) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(
        query
      )}&sort_by=popularity.desc&include_adult=false&include_video=false`
    : popular
    ? `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&without_genres=18`
    : `${
        TMDB_CONFIG.BASE_URL
      }/discover/movie?sort_by=release_date.desc&include_adult=false&include_video=false&vote_count.gte=1000&release_date.lte=${getDate()}`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();
  // @ts-ignore
  return data.results;
};

export const fetchMovieDetails = async (movieId: string) => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) throw new Error("Could not fetch Movie Details");

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
