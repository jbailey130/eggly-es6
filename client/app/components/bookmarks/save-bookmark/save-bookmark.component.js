/**
 * Created by josh on 4/4/17.
 */
import template from './save-bookmark.html';
import controller from './save-bookmark.controller';

let saveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  template,
  controller,
  controllerAs: 'saveBookmarkCtrl'
};

export default saveBookmarkComponent;
