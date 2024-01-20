// Без деструктуризації
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? 'public' : 'private';
console.log(accessType); // public
const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
console.log(message); // Book The Last Kingdom by author Bernard Cornwell with rating 8.38 is in public access!
console.log(book.genres); // ['historical prose', 'adventure']

// З деструктуризацією

const { title, author, genres, isPublic, rating } = book;

const accessType1 = isPublic ? 'public' : 'private';
console.log(accessType1); // public
const message1 = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
console.log(message); // Book The Last Kingdom by author Bernard Cornwell with rating 8.38 is in public access!
console.log(genres); // ['historical prose', 'adventure']

// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно undefined.

const film = {
  filmTitle: 'The Shawshank Redemption',
  year: 1994,
  rated: 'R',
  released: '14 Oct 1994',
};
const { filmTitle, year, rated, released, runtime } = film;
console.log(filmTitle); // 'The Shawshank Redemption'
console.log(runtime); // undefined

// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, використовуючи знак =. Це значення буде присвоєно тільки у випадку, коли в об'єкті відсутня властивість із таким ім'ям.

const movies = {
  genre: 'Drama',
}
const { genre, director = 'Frank Darabont' } = movies;
console.log(genre);
console.log(director);


function solution(string) {
  if (/[A-Z]/g.test(string)) { return string.replace(/[A-Z]/g, "") }
  else { return string }
}
console.log(solution('camelCasing'));
console.log(solution(''));

