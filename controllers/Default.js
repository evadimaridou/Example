'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

// DELETE an author with specific author id
// Calls the service folder function
module.exports.authorsAuthorIdDELETE = function authorsAuthorIdDELETE (_, res, __, authorId) {
  Default.authorsAuthorIdDELETE(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// GET an author with specific author id
// Calls the service folder function
module.exports.authorsAuthorIdGET = function authorsAuthorIdGET (_, res, __, authorId) {
  Default.authorsAuthorIdGET(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// EDIT an author with specific author id
// Calls the service folder function
module.exports.authorsAuthorIdPUT = function authorsAuthorIdPUT (_, res, __, body, authorId) {
  Default.authorsAuthorIdPUT(body, authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// GET all authors
// Calls the service folder function
module.exports.authorsGET = function authorsGET (_, res, __) {
  Default.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// CREATE an author 
// Calls the service folder function
module.exports.authorsPOST = function authorsPOST (_, res, __, body) {
  Default.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// DELETE a book with specific book id
// Calls the service folder function
module.exports.booksBookIdDELETE = function booksBookIdDELETE (_, res, __, bookId) {
  Default.booksBookIdDELETE(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// GET a book with specific book id
// Calls the service folder function
module.exports.booksBookIdGET = function booksBookIdGET (_, res, __, bookId) {
  Default.booksBookIdGET(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// EDIT a book with specific book id
// Calls the service folder function
module.exports.booksBookIdPUT = function booksBookIdPUT (_, res, __, body, bookId) {
  Default.booksBookIdPUT(body, bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
// GET all books 
// Calls the service folder function
module.exports.booksGET = function booksGET (_, res, __) {
  Default.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// CREATE a book 
// Calls the service folder function
module.exports.booksPOST = function booksPOST (_, res, __, body) {
  Default.booksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// DELETE a category with specific category id
// Calls the service folder function
module.exports.categoriesCategoryIdDELETE = function categoriesCategoryIdDELETE (_, res, __, categoryId) {
  Default.categoriesCategoryIdDELETE(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// GET a category with specific category id
// Calls the service folder function
module.exports.categoriesCategoryIdGET = function categoriesCategoryIdGET (_, res, __, categoryId) {
  Default.categoriesCategoryIdGET(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// EDIT a category with specific category id
// Calls the service folder function
module.exports.categoriesCategoryIdPUT = function categoriesCategoryIdPUT (_, res, __, body, categoryId) {
  Default.categoriesCategoryIdPUT(body, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// GET all categories 
// Calls the service folder function
module.exports.categoriesGET = function categoriesGET (_, res, __) {
  Default.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// CREATE a new category
// Calls the service folder function
module.exports.categoriesPOST = function categoriesPOST (_, res, __, body) {
  Default.categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};