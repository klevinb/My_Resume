import React, { Component } from 'react';
import styles from './Main.module.scss';
import Home from '../Home';
import Education from '../Education';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default class ReactReveal extends Component {
  render() {
    return (
      <>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />

        <div className={styles.SideSocial}>
          <div className={styles.SocialContainer}>
            <a
              className={styles.SocialLinks}
              href='https://github.com/klevinb'
              rel='noopener noreferrer'
              target='_blank'
              alt='github'
            >
              <AiFillGithub />
            </a>
            <a
              className={styles.SocialLinks}
              href='https://www.linkedin.com/in/klevinbazaiti/'
              rel='noopener noreferrer'
              target='_blank'
              alt='linkedin'
            >
              <AiFillLinkedin />
            </a>
            <a
              href='mailto:ofoaro.jeff@gmail.com'
              className='socialLinks'
              alt='social'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='lnr lnr-envelope'></span>
            </a>
          </div>
        </div>
      </>
    );
  }
}
