// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const books = [
    { "title": 'Book 1', "author": 'author 1', "year": 2908 },
    { "title": 'Book 2', "author": 'author 2', "year": 2212 },
    { "title": 'Book 3', "author": 'author 3', "year": 2009 },
    { "title": 'Book 4', "author": 'author 4', "year": 2115 },
  ];


  const filteredBooks = books.filter((book) => book.year >= 2010);

  const capitalizedBooks = filteredBooks.map((book) => {
    book.author = book.author.toUpperCase();
    return book;
  });
  
  console.log(capitalizedBooks);
  