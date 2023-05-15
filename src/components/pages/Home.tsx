import {default as React, useEffect, useReducer} from 'react';
import {filterAndSliceArticles} from '../../utils/filterAndSliceArticles/filterAndSliceArticles';
import {timeElapsedSince} from '../../utils/timeElapsed/timeElapsed';
import CategoryHeader from '../atoms/CategoryHeader/Header';
import Loader from '../atoms/Loader/Loader';
import Card from '../molecules/Card/Card';
import CategoryComponent from '../molecules/Category/Category';
import './Home.styles.css';
const HomeComponent: React.FC = () => {
  // const {headlineByCategory, getHeadlineByCategory}: any =
  //   useContext(NewsAppContext);
  const initialState = {
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
  const key1 = '6e256f9c5c604636a85c33f828af7b7e'; //dav
  const key = '4cc2340375884cc5abde119594fbb772'; //aim
  const fetchArticles = async (category: any) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`
      );
      const data = await response.json();
      dispatch({type: 'FETCH_SUCCESS', category, articles: data.articles});
    } catch (error) {
      dispatch({type: 'FETCH_ERROR', error});
    }
  };

  useEffect(() => {
    fetchArticles('business');
    fetchArticles('entertainment');
    fetchArticles('health');
    fetchArticles('science');
    fetchArticles('sports');
    fetchArticles('technology');
  }, []);

  const {
    business,
    entertainment,
    health,
    science,
    sports,
    technology,
    loading,
    error,
  } = state;

  console.log('Business:', business);
  console.log('Entertainment:', entertainment);
  console.log('Health:', health);
  console.log('Science:', science);
  console.log('Sports:', sports);
  console.log('Technology:', technology);
  console.log('Loading:', loading);

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
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {technology ? (
            filterAndSliceArticles(technology, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
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
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {health &&
            filterAndSliceArticles(health, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )}
        </div>
        {/* right */}
        <div className='flex-item-right'>
          <CategoryHeader
            title={'Science'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {science ? (
            filterAndSliceArticles(science, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className='flex-container'>
        {/* left */}
        <div className='flex-item-left'>
          <CategoryHeader
            title={'Sports'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {sports ? (
            filterAndSliceArticles(sports, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          ) : (
            <Loader />
          )}
        </div>
        {/* center */}

        <div className='flex-item-center'>
          <CategoryHeader
            title={'Entertainment'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {entertainment &&
            filterAndSliceArticles(entertainment, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )}
        </div>
        {/* right */}
        <div className='flex-item-right'>
          <CategoryHeader
            title={'Business'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {business ? (
            filterAndSliceArticles(business, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
