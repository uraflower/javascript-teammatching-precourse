import { CREW_TABLE } from '../constants/markup/crew.js';
import COURSE from '../constants/course.js';

class CrewView {
  #main;

  constructor() {
    this.#main = document.querySelector('main');
  }

  renderCrewTable(currentCourse, crewList) {
    this.#main.innerHTML += CREW_TABLE(COURSE[currentCourse]);

    const table = document.querySelector('#crew-table');
    const thead = this.#createCrewTableHead();
    const tbody = this.#createCrewTableBody(crewList);

    table.append(thead);
    table.append(tbody);
  }

  #createCrewTableHead() {
    const headList = ['', '크루', '관리'];
    const thead = this.createElement('thead');
    const tr = this.createElement('tr');
    headList.forEach((head) => tr.append(this.createElement('th', head)));
    thead.append(tr);
    return thead;
  }

  #createCrewTableBody(crewList) {
    const tbody = document.createElement('tbody');
    crewList.forEach((crew, index) => {
      const tr = document.createElement('tr');
      tr.append(this.createElement('td', index + 1));
      tr.append(this.createElement('td', crew));
      tr.append(this.createDeleteButton());
      tbody.append(tr);
    });
    return tbody;
  }

  createDeleteButton() {
    const button = document.createElement('button');
    button.classList.add('delete-crew-button');
    button.innerText = '삭제';
    return button;
  }

  createElement(tagName, innerText) {
    const element = document.createElement(tagName);
    if (innerText) {
      element.innerText = innerText;
    }

    return element;
  }
}

export default CrewView;
