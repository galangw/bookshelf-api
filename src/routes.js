const {
  saveBookHndlr, allBookHndlr, getBookHndlr, deleteBookHndlr, changeBookHndlr,
} = require('./handler'); 

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBookHndlr,
  },
  {
    method: 'GET',
    path: '/books',
    handler: allBookHndlr,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookHndlr,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: changeBookHndlr,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHndlr,
  },
];

module.exports = routes;
