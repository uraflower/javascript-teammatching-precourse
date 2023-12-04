import { BASE } from './constants/markup/markup.js';

class App {
  #app;

  constructor() {
    this.#app = document.getElementById('app');
    this.#render();
  }

  #render() {
    this.#app.innerHTML += BASE;
  }
}

export default App;
