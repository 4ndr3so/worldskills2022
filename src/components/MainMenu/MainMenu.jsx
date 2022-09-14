import React, { FC } from 'react';
import styles from './MainMenu.module.scss';

interface MainMenuProps {}

const MainMenu: FC<MainMenuProps> = () => (
  <div className={styles.MainMenu} data-testid="MainMenu">
    MainMenu Component
  </div>
);

export default MainMenu;
