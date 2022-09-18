import icons from '../../img/icons.svg';
import previewView from './previewView.js';
import View from './View';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errormessage = 'No bookmarks yet. Find a recipe and bookmark it.';
  _successMessage = '';

  addHamdlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkUp() {
    // console.log(this._data);

    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new BookmarksView();
