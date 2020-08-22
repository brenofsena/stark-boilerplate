import React from 'react';
import Styles from './style/style.scss';
import StarkLogo from './images/stark.png';

const App = () => (
  <div className={Styles.wrapper}>
    <img
      data-testid="image"
      className={Styles.image}
      src={StarkLogo}
      alt="Stark Boilerplate"
      title="Stark Boilerplate"
    />
  </div>
);

export default App;
