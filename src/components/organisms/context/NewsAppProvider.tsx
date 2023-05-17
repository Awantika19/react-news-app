import axios from 'axios';
import {useState} from 'react';
import {NewsAppContext} from './NewsAppContext';
const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
const BASE_URL = `https://newsapi.org/v2/top-headlines?`;
// https://newsapi.org/v2/top-headlines?country=in&category=technology

export const NewsAppProvider = ({children}: any) => {
  const [headlineByCategory, setHeadlineByCategory] = useState([]);

  const [businessState, setBusinessState] = useState([]);
  const [entertainmentState, setEntertainmentState] = useState([]);
  const [healthState, setHealthState] = useState([]);
  const [scienceState, setScienceState] = useState([]);
  const [sportsState, setSportsState] = useState([]);
  const [technologyState, setTechnologyState] = useState([]);
  const [searchState, setSearchState] = useState([]);
  const [queryState, setQueryState] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const getHeadlineByCategory = (COUNTRY_CODE: any, CATEGORY: any) => {
    axios
      .get(
        `${BASE_URL}country=${COUNTRY_CODE}&category=${CATEGORY}&apiKey=${API_KEY}`
      )
      .then((response: any) => {
        // handle success
        setHeadlineByCategory(response.data);
        // console.log('response-->', response.data);
        return response.data;
      })
      .catch((error: any) => {
        // handle error
        console.log(error);
      });
  };

  // const fetchSearchData = async (query: any) => {
  //   const API_KEY = '4cc2340375884cc5abde119594fbb772';
  //   try {
  //     const response = await fetch(
  //       ` https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
  //     );
  //     const data = await response.json();
  //     return data.articles;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <NewsAppContext.Provider
      value={{
        headlineByCategory,
        getHeadlineByCategory,
        businessState,
        setBusinessState,
        entertainmentState,
        setEntertainmentState,
        healthState,
        setHealthState,
        scienceState,
        setScienceState,
        sportsState,
        setSportsState,
        technologyState,
        setTechnologyState,
        searchState,
        setSearchState,
        setQueryState,
        queryState,
        searchResult,
        setSearchResult,
        searchQuery,
        setSearchQuery,
      }}>
      {children}
    </NewsAppContext.Provider>
  );
};
