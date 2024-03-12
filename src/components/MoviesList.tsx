import Card from './Card';
import Error from './Error';

// MoviesListProps defines the expected props for the MoviesList component.
interface MoviesListProps {
  results?: {
    id: number;
    backdrop_path?: string;
    poster_path?: string;
    overview: string;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_count: number;
  }[];
}

// MoviesList component renders a grid of Card components based on the provided results.
const MoviesList: React.FC<MoviesListProps> = ({ results }) => {
  // Check if there are no results, and display an error message using the Error component.
  if (!results || results.length === 0) {
    return <Error error="No results found." />;
  }

  // Render a grid of Card components for each result.
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default MoviesList;
