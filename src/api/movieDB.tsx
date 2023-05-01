// File that will contain all HTTP requests
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';
import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2e76e7188abbdd2c393393fb6b0eee9a',
    language: 'en-US',
  },
});

export default movieDB;
