import React from 'react';

import SearchComponent from '../../molecules/Search/Search';
import './HeaderNavigationMenu.styles.css';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// dotenv.config();
interface HeaderProps {
  title: string;
}

const HeaderNavigationMenu: React.FC<HeaderProps> = ({title}) => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Do something with the search query, such as fetching data from an API
  };
  return (
    <>
      <div className='header-navigation-menu-container'>
        <header className='header-wrapper'>
          <h1 className='title'>{title}</h1>
          {/* Search button */}

          {/* <nav className='navigation'>
        <a href='/' className='link'>
          Home
        </a>
        <a href='/about' className='link'>
          About
        </a>
        <a href='/contact' className='link'>
          Contact
        </a>
      </nav> */}
        </header>
        <div className='search-button-wrapper'>
          <SearchComponent onSearch={handleSearch} />
        </div>
      </div>
    </>
  );
};

export default HeaderNavigationMenu;
