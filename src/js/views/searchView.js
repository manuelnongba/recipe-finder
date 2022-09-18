class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearinput();
    return query;
  }

  _clearinput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
