import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Home.module.scss';
import { Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <div className={styles.Container} id='home'>
        <div className={styles.Home}>
          <Fade left>
            <Row className={styles.Row}>
              <Col sm={12} md={6} lg={4}>
                <a
                  href='https://www.linkedin.com/in/klevinbazaiti/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Image fluid className={styles.Uni} src='/assets/about.jpg' />
                </a>
              </Col>
              <Col sm={12} md={6} lg={8}>
                <span className={styles.Title}>
                  <span className={styles.Wave}>👋</span>
                  I'm Klevin
                </span>
                <p className={styles.HeadLine}>
                  Energic and self-motivated Full Stack Developer
                </p>
              </Col>
            </Row>
          </Fade>
        </div>
      </div>
    </>
  );
}
