import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

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

interface MoviePageProps {
  params: MovieProps;
}

const MoviePage: NextPage<MoviePageProps> = ({ params }) => {
  const { id, backdrop_path, poster_path, title, name, overview, release_date, first_air_date, vote_count } = params;

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
          alt=''
        />
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {title || name}
          </h2>
          <p className='text-lg mb-3'>{overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>
            {release_date || first_air_date}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<MoviePageProps> = async (context) => {
  const movieId = context.params?.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return {
    props: { params: movie },
  };
};

export default MoviePage;
