import {default as React, useContext, useEffect, useReducer} from 'react';
import {NewsAppContext} from '../../components/organisms/context/NewsAppContext';
import {timeElapsedSince} from '../../utils/timeElapsed/timeElapsed';
import CategoryHeader from '../atoms/CategoryHeader/Header';
import HorizontalLine from '../atoms/HorizontalLine/HorizontalLine';
import Loader from '../atoms/Loader/Loader';
import Card from '../molecules/Card/Card';
import CategoryComponent from '../molecules/Category/Category';
import './Home.styles.css';
const HomeComponent: React.FC = () => {
  const {headlineByCategory, getHeadlineByCategory}: any =
    useContext(NewsAppContext);
  console.log('headlineByCountry-->', headlineByCategory);
  const filteredData = headlineByCategory?.articles?.filter(
    (item: any) => item.urlToImage !== null
  );
  const slicedData = filteredData?.slice(0, 3);
  console.log('filteredData', filteredData);
  const COUNTRY_CODE = 'in';
  const CATEGORY = 'business';
  useEffect(() => {
    getHeadlineByCategory('in', 'general');
  }, []);

  const initialState = {
    general: [],
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
    loading: true,
    error: null,
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          ...state,
          [action.category]: action.articles,
          loading: false,
          error: null,
        };
      case 'FETCH_ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
  const fetchArticles = async (category: any) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      dispatch({type: 'FETCH_SUCCESS', category, articles: data.articles});
    } catch (error) {
      dispatch({type: 'FETCH_ERROR', error});
    }
  };

  useEffect(() => {
    fetchArticles('general');
    fetchArticles('business');
    fetchArticles('entertainment');
    fetchArticles('health');
    fetchArticles('science');
    fetchArticles('sports');
    fetchArticles('technology');
  }, []);

  const {
    general,
    business,
    entertainment,
    health,
    science,
    sports,
    technology,
    loading,
    error,
  } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {/* <h1>Category</h1> */}
      <CategoryComponent />
      <div className='flex-container'>
        {/* left */}
        <div className='flex-item-left'>
          <CategoryHeader
            title={'Technology'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <HorizontalLine color={'#EEEEEE'} height={2} />

          {slicedData ? (
            slicedData?.map((item: any, index: number) => (
              <Card
                imageUrl={item.urlToImage}
                title={item.title}
                lastUpdated={timeElapsedSince(item.publishedAt)}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
        {/* center */}
        <div className='flex-item-center'>
          <CategoryHeader
            title={'Health'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <HorizontalLine color={'#EEEEEE'} height={2} />

          {health.map((article: any) => (
            <Card
              imageUrl={article.urlToImage}
              title={article.title}
              lastUpdated={timeElapsedSince(article.publishedAt)}
            />
          ))}
        </div>
        {/* right */}
        <div className='flex-item-right'>
          <Card
            imageUrl='https://picsum.photos/id/237/400/300'
            title='Lorem Ipsum-3'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo euismod purus vitae bibendum.'
            lastUpdated='May 13, 2023'
          />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
