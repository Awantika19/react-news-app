import React from 'react';

import SearchComponent from '../../molecules/Search/Search';
import './Header.styles.css';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// dotenv.config();
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Do something with the search query, such as fetching data from an API
  };
  return (
    <header className='header-wrapper'>
      <h1 className='title'>{title}</h1>
      {/* Search button */}
      <SearchComponent onSearch={handleSearch} />
      <nav className='navigation'>
        <a href='/' className='link'>
          Home
        </a>
        <a href='/about' className='link'>
          About
        </a>
        <a href='/contact' className='link'>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
