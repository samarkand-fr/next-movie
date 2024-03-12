import Image from 'next/image';

// Define the shape of the movie properties
interface MovieProps {
  id: number;
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  name?: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

// Define the shape of the props received by the MoviePage component
interface MoviePageProps {
  params: MovieProps;
}

// Define the MoviePage component
export default async function MoviePage({ params }: MoviePageProps) {
  // Extract movieId from params
  const movieId = params.id;

  // Fetch movie details from the API using the movieId
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  // Parse the response as JSON to get the movie data
  const movie = await res.json();

  // Render the movie details on the page
  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        {/* Display the movie image using the Next.js Image component */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
          alt={''}
        />
        <div className='p-2'>
          {/* Display movie title or name */}
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>
          {/* Display movie overview */}
          <p className='text-lg mb-3'>{movie.overview}</p>
          {/* Display release date or first air date */}
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          {/* Display the movie's vote count */}
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
