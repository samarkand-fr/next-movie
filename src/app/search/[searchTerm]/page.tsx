import Results from '@/components/MoviesList';

// Define the props for the SearchPage component
interface SearchPageParams {
  params: { searchTerm?: string };
}

// SearchPage component
const SearchPage: React.FC<SearchPageParams> = ({ params }) => {
  // Extract the searchTerm from params or set it to an empty string
  const searchTerm = params?.searchTerm || '';
  const apiKey = process.env.API_KEY;
  
  // Construct the API URL for fetching movie data based on the searchTerm
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;

  // Fetch data function
  const fetchData = async () => {
    try {
      // Make a fetch request to the API
      const res = await fetch(apiUrl);

      // Check if the response is successful, otherwise throw an error
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse the JSON data from the response
      const data = await res.json();
      // Extract the results from the data
      const results = data.results;

      // Return the results
      return results;
    } catch (error) {
      // Log an error message if there is an issue fetching data
      console.error('Error fetching data:', error);
      // Return an empty array in case of an error
      return [];
    }
  };

  return (
    <div>
      {/* Render the results or a message if no results are found */}
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
