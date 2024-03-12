import Image from 'next/image';

const Loading: React.FC = () => {
  return (
    <div className='flex justify-center mt-16'>
      <Image
        className='h-52'
        src='./spinner.svg'
        alt='loading...'
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
