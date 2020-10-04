import React, { useState, Fragment } from 'react';
import Bounce from 'react-reveal/Bounce';
import styles from './Nav.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <Fragment>
      <header className={styles.Header}>
        <div>
          <a href='#home'>
            <div className={styles.Neon}>
              <Bounce>{`< Klevin /> `}</Bounce>
            </div>
          </a>
        </div>
        <GiHamburgerMenu
          className={styles.BurgerMenu}
          onClick={() => setShow(!show)}
        />
        <div
          className={
            show ? `${styles.NavOptions} ${styles.ShowHide}` : styles.NavOptions
          }
        >
          <a
            className={styles.NeonLink}
            href='#about'
            onClick={() => setShow(!show)}
            rel='noopener noreferrer'
          >
            About
          </a>
          <a
            className={styles.NeonLink}
            href='#education'
            onClick={() => setShow(!show)}
            rel='noopener noreferrer'
          >
            Education
          </a>
          <a
            className={styles.NeonLink}
            href='#skills'
            onClick={() => setShow(!show)}
            rel='noopener noreferrer'
          >
            Skills
          </a>
          <a
            className={styles.NeonLink}
            href='#projects'
            onClick={() => setShow(!show)}
            rel='noopener noreferrer'
          >
            Projects
          </a>
        </div>
      </header>
    </Fragment>
  );
}
