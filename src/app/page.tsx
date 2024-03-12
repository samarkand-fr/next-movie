import { NextPage } from 'next';
import Results from '../components/MoviesList';
import Loading from '@/components/Loading';  // Import the Loading component

interface ResultItem {
  id: number;
  backdrop_path?: string;
  poster_path?: string;
  overview: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

interface HomeProps {
  searchParams: {
    genre?: string;
  };
}

const API_KEY = process.env.API_KEY;

// Define the Home component as a NextPage
const Home: NextPage<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  const endpoint =
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week';

  let isLoading = true;
  let results: ResultItem[] = [];

  try {
    // Fetch data from the API
    const res = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`
    );

    // Check if the response is successful
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the response as JSON
    const data = await res.json();
    results = data.results;
    isLoading = false;
  } catch (error) {
    // Handle errors and log them
    console.error('Error fetching data:', error);
  }

  return (
    <div>
      {/* Conditionally render Loading component or Results component based on the loading state */}
      {isLoading ? (
        <div className="flex justify-center mt-16">
          <Loading />
        </div>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
};

export default Home;
