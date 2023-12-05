import Tab from '../Model/Tab.js';
import TabView from '../View/TabView.js';

class TabController {
  #tab;

  #view;

  constructor() {
    this.#tab = new Tab();
    this.#view = new TabView();

    this.#view.renderTabs();
    this.#view.bindClickTab(this.#handleClickTab);
  }

  #handleClickTab(currentTab) {
    // tab model control
    console.log(currentTab);
  }
}

export default TabController;
