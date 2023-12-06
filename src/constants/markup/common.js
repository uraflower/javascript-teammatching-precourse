import CLASS from '../class';
import ID from '../id';

const BASE = `
  <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
  </header>
  <main></main>
`;

const TABS = `
  <nav>
    <ul>
      <li>
        <button id=${ID.crewTab} class=${CLASS.tabItem}>크루 관리</button>
      </li>
      <li>
        <button id=${ID.teamTab} class=${CLASS.tabItem}>팀 매칭 관리</button>
      </li>
    </ul>
  </nav>
`;

export { BASE, TABS };
