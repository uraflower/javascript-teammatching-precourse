import CrewTabController from './CrewTabController.js';
import TeamTabController from './TeamTabController.js';
import { TABS } from '../constants/markup/common.js';

class TabController {
  #tabs;

  #crewTabController;

  #teamTabController;

  constructor() {
    this.#initControllers();
    this.#initTabs();
    this.#renderTabs();
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

  #renderTabs() {
    const header = document.querySelector('header');
    header.innerHTML += TABS;
  }

  #handleTabClick() {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((tab) => {
      tab.addEventListener('click', this.#tabs[tab.id]);
    });
  }
}

export default TabController;
