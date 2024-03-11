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

const Card: React.FC<CardProps> = ({ result }) => {
  return (
    <div className='group cursor-pointer hover:shadow-lg rounded-lg border border-gray-300 m-2 transition-shadow duration-300'>
      <Link href={`/movie/${result.id}`}>
        <div className='relative w-full h-48 md:h-64 overflow-hidden rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'>
          <Image
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            layout='fill'
            objectFit='cover'
            alt={''}
          />
        </div>
        <div className='p-3'>
          <p className='line-clamp-2 text-sm md:text-md'>{result.overview}</p>
          <h2 className='text-lg md:text-xl font-bold mt-2 mb-1 truncate'>
            {result.title || result.name}
          </h2>
          <div className='flex items-center text-sm md:text-md'>
            <p className='mr-3'>
              {result.release_date || result.first_air_date}
            </p>
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
