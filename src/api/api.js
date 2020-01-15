import axios from 'axios'
export const movie = (id, key) => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)

export const character = (id, key) => axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)

export const video = (id, key) => axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`)