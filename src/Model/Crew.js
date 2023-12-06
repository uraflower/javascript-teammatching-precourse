class Crew {
  #currentCourse;

  #courses;

  constructor() {
    this.#currentCourse = '';
    this.#courses = {
      frontend: ['준', '포코'],
      backend: ['포비', '제이슨'],
    };
  }

  get currentCourse() {
    return this.#currentCourse;
  }

  get crewList() {
    return this.#courses[this.#currentCourse];
  }
}

export default Crew;
