const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;

if (!TMDB_API_KEY || !TMDB_API_URL) {
  throw new Error('TMDB API configuration is missing');
}

export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface TMDBSearchResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

export async function searchMovies(query: string): Promise<TMDBSearchResponse> {
  const response = await fetch(
    `${TMDB_API_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  return response.json();
}

export async function getMovie(id: number): Promise<TMDBMovie> {
  const response = await fetch(
    `${TMDB_API_URL}/movie/${id}?api_key=${TMDB_API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie');
  }

  return response.json();
}
