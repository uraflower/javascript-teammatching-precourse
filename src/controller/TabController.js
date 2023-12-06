import TabView from '../View/TabView.js';
import CrewTabController from './CrewTabController.js';

class TabController {
  #view;

  #tabs;

  #crewTabController;

  constructor() {
    this.#crewTabController = new CrewTabController();

    this.#tabs = {
      'crew-tab': this.#crewTabController,
      'team-tab': null, // 추후 teamTabController 할당
    };
    this.#view = new TabView();

    this.#view.renderTabs();
    this.#view.bindClickTab(this.#handleClickTab);
  }

  // view에서 이 함수가 콜백함수로 실행될 때,
  // this가 이 클래스를 가르키게 하기 위해 화살표 함수 사용
  #handleClickTab = (currentTab) => {
    this.#tabs[currentTab].render();
  };
}

export default TabController;
