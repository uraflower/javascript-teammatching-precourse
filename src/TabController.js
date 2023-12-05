import { TABS } from './constants/markup/markup.js';

class TabController {

  constructor() {
    this.#renderTabs();
  }

  #renderTabs() {
    const header = document.querySelector('header');
    header.innerHTML += TABS;
  }
}

export default TabController;
