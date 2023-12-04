import { TABS } from './constants/markup/markup.js';

class TabController {
  #header;

  constructor() {
    this.#header = document.querySelector('header');
    this.#renderTabs();
  }

  #renderTabs() {
    this.#header.innerHTML += TABS;
  }
}

export default TabController;
