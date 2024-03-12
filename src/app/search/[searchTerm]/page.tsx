import Results from '@/components/MoviesList';

interface SearchPageParams {
  params: { searchTerm?: string };
}

const SearchPage: React.FC<SearchPageParams> = ({ params }) => {
  const searchTerm = params?.searchTerm || '';
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      const results = data.results;

      return results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  return (
    <div>
      {fetchData().then((results) => (
        <>
          {results && results.length === 0 ? (
            <h1 className="text-center pt-6">No results found</h1>
          ) : (
            <Results results={results} />
          )}
        </>
      ))}
    </div>
  );
};

export default SearchPage;
