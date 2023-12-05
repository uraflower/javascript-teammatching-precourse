import View from './View/View.js';
import TabController from './controller/TabController.js';

class App {
  constructor() {
    View.renderBase();
    new TabController();
  }
}

export default App;
