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
      console.log(response.data);
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
