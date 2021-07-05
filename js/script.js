/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt('How many films have you watched so far?', '');

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      private: false
};

let lastWatchedFilm = prompt('One of the last movies you watched?', '');
let youRatings = +prompt('How much would you rate it?', '');
let lastWatchedFilm2 = prompt('One of the last movies you watched?', '');
let youRatings2 = +prompt('How much would you rate it?', '');

personalMovieDB.movies[lastWatchedFilm] = youRatings;
personalMovieDB.movies[lastWatchedFilm2] = youRatings2;

console.log(personalMovieDB);