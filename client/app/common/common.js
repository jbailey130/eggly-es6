import angular from 'angular';
import BookmarksModel from './models/bookmarks.model';
import CategoriesModel from './models/categories.model';

const CommonModule = angular.module('common', [])
  .service('CategoriesModel', CategoriesModel)
  .service('BookmarksModel', BookmarksModel);

export default CommonModule;
