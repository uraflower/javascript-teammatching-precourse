import { BASE, TABS } from '../constants/markup/common.js';

const View = {
  renderBase() {
    const app = document.querySelector('#app');
    app.innerHTML += BASE;
  },

  renderTabs() {
    const header = document.querySelector('header');
    header.innerHTML += TABS;
  },
};

Object.freeze(View);
export default View;
