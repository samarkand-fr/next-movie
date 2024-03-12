import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

interface CardProps {
  result: {
    id: number;
    backdrop_path?: string;
    poster_path?: string;
    overview: string;
    title?: string;
    name?: string;
    release_date?: string;
    first_air_date?: string;
    vote_count: number;
  };
}

// Card component to display information about a movie or TV show.
const Card: React.FC<CardProps> = ({ result }) => {
  return (
    // Container for each card, clickable to navigate to the individual movie/TV show page.
    <div className='group cursor-pointer hover:shadow-lg rounded-lg border border-gray-300 m-2 transition-shadow duration-300'>
      {/* Link to the individual movie/TV show page. */}
      <Link href={`/movie/${result.id}`}>
        {/* Image container with hover effects and responsive sizing. */}
        <div className='relative w-full h-48 md:h-64 overflow-hidden rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'>
          {/* Image component for displaying the backdrop or poster of the movie/TV show. */}
          <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            layout='fill'
            objectFit='cover'
            alt={''}
          />
        </div>
        {/* Text content container with movie/TV show details. */}
        <div className='p-3'>
          {/* Overview with line clamp to limit the number of lines displayed. */}
          <p className='line-clamp-2 text-sm md:text-md'>{result.overview}</p>
          {/* Title with truncation to fit within the container. */}
          <h2 className='text-lg md:text-xl font-bold mt-2 mb-1 truncate'>
            {result.title || result.name}
          </h2>
          {/* Release date and vote count information. */}
          <div className='flex items-center text-sm md:text-md'>
            <p className='mr-3'>{result.release_date || result.first_air_date}</p>
            {/* Thumbs up icon and vote count. */}
            <div className='flex items-center'>
              <FiThumbsUp className='h-5 mr-1' />
              <span>{result.vote_count}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
