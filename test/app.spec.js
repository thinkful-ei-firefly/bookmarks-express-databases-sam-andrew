const app = require('../src/app');
const BookmarksService = require('../src/BookmarksService');
const knex = require('knex');
const testData = [
  {
    "title": "something",
    "url": "something.com",
    "rating": "4"
  },
  {
    "title": "something",
    "url": "something.com",
    "rating": "2",
    "description": "I describe this"
  }
]



describe('BookmarksService', () => {
  describe('getBookmarks()', () => {
    context('table is empty'), () => {

    }

    context('table has data'), () => {

    }
  })

  describe('getBookmark()', () => {
    
  })

  describe('addBookmarks()', () => {
    
  })

  describe('deleteBookmarks()', () => {
    
  })
})