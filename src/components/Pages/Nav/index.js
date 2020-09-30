import React, { Component, Fragment } from 'react';
import Bounce from 'react-reveal/Bounce';
import styles from './Nav.module.scss';

class App extends Component {
  render() {
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
          <div className={styles.NavOptions}>
            <a
              className={styles.NeonLink}
              href='#about'
              rel='noopener noreferrer'
            >
              About
            </a>
            <a
              className={styles.NeonLink}
              href='#education'
              rel='noopener noreferrer'
            >
              Education
            </a>
            <a
              className={styles.NeonLink}
              href='#skills'
              rel='noopener noreferrer'
            >
              Skills
            </a>
            <a
              className={styles.NeonLink}
              href='#projects'
              rel='noopener noreferrer'
            >
              Projects
            </a>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default App;
