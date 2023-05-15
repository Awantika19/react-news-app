import React, {useState} from 'react';
import './Search.styles.css'; // Import CSS file

interface SearchProps {
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchProps> = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='search-input'
        type='text'
        placeholder='Search...'
        value={query}
        onChange={handleInputChange}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
