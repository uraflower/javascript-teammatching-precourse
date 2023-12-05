import { BASE } from '../constants/markup/common.js';

class BaseView {
  renderBase() {
    const app = document.querySelector('#app');
    app.innerHTML += BASE;
  }
}

export default BaseView;
