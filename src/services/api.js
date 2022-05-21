import axios from 'axios';

const API_KEY = '07d8f6bb3fbc4adc66305e6fcf7baef2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
        const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
        return response.data.results;
};

export const getSearchMovies = async searchQuery => {
        const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        return response.data.results;
};

export const getMovieDetails = async id => {
        const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
        return response.data;
};

export const getMovieCredits = async id => {
        const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
        return response.data.cast;
};

export const getMovieReviews = async id => {
        const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
        return response.data.results;
};

