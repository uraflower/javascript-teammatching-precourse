import TabController from './controller/TabController.js';
import { BASE } from './constants/markup/common.js';

class App {
  #app;

  constructor() {
    this.#app = document.querySelector('#app');
    this.#render();
  }

  #render() {
    this.#app.innerHTML += BASE;
    new TabController();
  }
}

export default App;
