import icons from '../../img/icons.svg';
import View from './View.js';
import previewView from './previewView.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errormessage = 'No recipes found on your query. Please try again!';
  _successMessage = '';

  _generateMarkUp() {
    console.log(this._data);

    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultView();
