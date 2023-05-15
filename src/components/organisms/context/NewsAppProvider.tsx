import axios from 'axios';
import {useState} from 'react';
import {NewsAppContext} from './NewsAppContext';
const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
const BASE_URL = `https://newsapi.org/v2/top-headlines?`;
// https://newsapi.org/v2/top-headlines?country=in&category=technology

export const PokemonProvider = ({children}: any) => {
  const [headlineByCategory, setHeadlineByCategory] = useState([]);

  const getHeadlineByCategory = (COUNTRY_CODE: any, CATEGORY: any) => {
    axios
      .get(
        `${BASE_URL}country=${COUNTRY_CODE}&category=${CATEGORY}&apiKey=${API_KEY}`
      )
      .then((response: any) => {
        // handle success
        setHeadlineByCategory(response.data);
        console.log('response-->', response.data);
        return response.data;
      })
      .catch((error: any) => {
        // handle error
        console.log(error);
      });
  };

  return (
    <NewsAppContext.Provider
      value={{
        headlineByCategory,
        getHeadlineByCategory,
      }}>
      {children}
    </NewsAppContext.Provider>
  );
};
