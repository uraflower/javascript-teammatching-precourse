import Crew from '../Model/Crew.js';
import CrewView from '../View/CrewView.js';

class CrewTabController {
  #crew;

  #view;

  constructor() {
    this.#crew = new Crew();
    this.#view = new CrewView();
  }

  render() {
    this.#view.renderCrewTable(this.#crew.currentCourse, this.#crew.crewList);
  }
}

export default CrewTabController;
