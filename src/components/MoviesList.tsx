import Card from './Card';
import Error from './Error'; 

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

const MoviesList: React.FC<MoviesListProps> = ({ results }) => {
  if (!results || results.length === 0) {
    // Pass an error message to the Error component
    return <Error error="No results found." />;
  }

  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default MoviesList;
