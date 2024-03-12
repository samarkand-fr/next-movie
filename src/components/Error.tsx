interface ErrorProps {
  error: string; 
}

const Error: React.FC<ErrorProps> = ({ error}) => {
  return (
    <div className='text-center mt-10'>
      <h1>{error}</h1>
    </div>
  );
}

export default Error;
