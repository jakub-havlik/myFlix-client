// src/actions/actions.js

export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const ADD_FAV_MOVIE = 'ADD_FAV_MOVIE';
export const REM_FAV_MOVIE = 'REM_FAV_MOVIE';

export function setMovies(value) {
  return {
    type: SET_MOVIES,
    value
  };
}

export function setFilter(value) {
  return {
    type: SET_FILTER,
    value
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user: user?.Username
  };
}

export function addFavMovie(value) {
  return {
    type: ADD_FAV_MOVIE,
    value
  }
}

export function remFavMovie(value) {
  return {
    type: REM_FAV_MOVIE,
    value
  };
}