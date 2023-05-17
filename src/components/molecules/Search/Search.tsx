import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchSearchDataApi} from '../../../services/api';
import './Search.styles.css'; // Import CSS file
export const SearchComponent = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  // console.log('searchQuery', searchQuery);
  // console.log('searchResult', searchResult);
  const handleSearch = async () => {
    try {
      const response = await fetchSearchDataApi(searchQuery);
      console.log('response-->>--searchResult>', response?.data?.articles);
      setSearchResult(response?.data?.articles);

      const category = {
        title: `Search Results found - ${searchQuery}`,
        data: response?.data?.articles,
      };
      navigate('/detail/search', {state: {category}});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='search-form'>
      <input
        className='search-input'
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className='search-button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
