import angular from 'angular';
import CategoriesModule from './categories/categories';
import BookmarksModule from './bookmarks/bookmarks';

const ComponentModule = angular.module('app.components', [
  CategoriesModule.name,
  BookmarksModule.name
]);

export default ComponentModule;
