import React from 'react';
import { Header } from '../components/Header/Header';

type User = {
  name: string;
};

function Home() {
  const [user, setUser] = React.useState<User>();
  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <p>Vite + React + TS + ESlint + Storybook are fun to use!</p>
      <ul>
        <li>
          <a href="https://vitejs.dev/">vite</a>,&nbsp;
          <a href="https://reactjs.org/">react</a>,&nbsp;
          <a href="https://www.typescriptlang.org/">typescript</a>
        </li>
        <li>
          <a href="https://eslint.org/">eslint</a>,&nbsp;
          <a href="https://typescript-eslint.io/">typescript-eslint</a>,&nbsp;
          <a href="https://github.com/airbnb/javascript">
            eslint-airbnb-config
          </a>
          ,&nbsp;
          <a href="https://prettier.io/">prettier</a>&nbsp;
        </li>
        <li>
          <a href="https://vitest.dev/">vitest</a>,&nbsp;
          <a href="https://github.com/jsdom/jsdom">jsdom</a>,&nbsp;
          <a href="https://testing-library.com/">@testing-library</a>&nbsp;
        </li>
        <li>
          <a href="https://reactrouter.com/en/main">react-router v6</a>&nbsp;
        </li>
        <li>
          <a href="https://storybook.js.org/">storybook</a>&nbsp;
        </li>
      </ul>
    </>
  );
}

export default Home;
