import BaseView from './View/BaseView.js';
import TabController from './controller/TabController.js';

class App {
  #view;

  constructor() {
    this.#view = new BaseView();
    this.#view.renderBase();
    new TabController();
  }
}

export default App;
