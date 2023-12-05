import { TABS } from '../constants/markup/common.js';

class TabView {
  renderTabs() {
    const header = document.querySelector('header');
    header.innerHTML += TABS;
  }

  bindClickTab(handler) {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach((tab) => {
      tab.addEventListener('click', () => {
        handler(tab.id);
      });
    });
  }
}

export default TabView;
