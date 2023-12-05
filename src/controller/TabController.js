import CrewTabController from './CrewTabController.js';
import TeamTabController from './TeamTabController.js';
import View from '../View/View.js';

class TabController {
  #tabs;

  #crewTabController;

  #teamTabController;

  constructor() {
    this.#initControllers();
    this.#initTabs();
    View.renderTabs();
    this.#handleTabClick();
  }

  #initControllers() {
    this.#crewTabController = new CrewTabController();
    this.#teamTabController = new TeamTabController();
  }

  #initTabs() {
    this.#tabs = {
      'crew-tab': this.#crewTabController.show,
      'team-tab': this.#teamTabController.show,
    };
  }

  #handleTabClick() {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((tab) => {
      tab.addEventListener('click', this.#tabs[tab.id]);
    });
  }
}

export default TabController;
