import axios from 'axios';
const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
// const API_BASE_URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY_CODE}&apiKey=${API_KEY}`;
export const BASE_URL = 'https://newsapi.org/v2/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHeadlineByCountry = async () => {
  // const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
  // const API_BASE_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

  axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=f463419c4e4c4ebd96549c95688e979b'
    )
    .then((response: any) => {
      // handle success
      // console.log(response.data);
      return response.data;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
    });
};

// export const getPokemonDetails = async id => {
//   try {
//     const response = await api.get(`/pokemon/${id}`);
//     return response.data;
//   } catch ((error:any) {
//     throw new Error(error.message);
//   }
// };

// // GET Pokemon Strengths & Weaknesses
// export const getPokemonType = async id => {
//   try {
//     const response = await api.get(`${BASE_URL}/type/${id}`);
//     return response.data;
//   } catch ((error:any) {
//     throw new Error(error.message);
//   }
// };

// // GET Pokemon Strengths & Weaknesses
// export const getPokemonDescription = async id => {
//   try {
//     const response = await api.get(`${BASE_URL}/pokemon-species/${id}`);
//     return response.data;
//   } catch (error) {
//     throw new Error((error:any.message);
//   }
// };

// // GET Pokemon gender
// export const getPokemonGender = id => {
//   return axios.get(`${BASE_URL}/gender/${id}`);
// };

export const fetchSearchDataApi = async (query: any) => {
  const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
  const key4 = '2d55f494fe674381af5e990d5d995b6e';
  const key5 = 'ac009e2e2d1b4cc3a6ec7087c51a73af';
  try {
    const data = await axios.get(
      ` https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${key5}`
    );

    // https://newsapi.org/v2/everything?q=apple&sortBy=popularity
    // const data = await response.json();
    // console.log('data##', data);
    return data;
    // dispatch({type: 'FETCH_SUCCESS', category, articles: data.articles});
  } catch (error) {
    console.log(error);
  }
};
