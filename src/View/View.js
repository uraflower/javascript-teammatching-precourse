import { BASE, TABS } from '../constants/markup/common.js';

const View = {
  renderBase() {
    const app = document.querySelector('#app');
    app.innerHTML += BASE;
  },

};

Object.freeze(View);
export default View;
