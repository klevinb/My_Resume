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
                  <Image
                    fluid
                    className={styles.Uni}
                    src='https://instagram.fosl4-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/74964062_181067232942967_2311963254663365869_n.jpg?_nc_ht=instagram.fosl4-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=95dcHvneqQQAX-BjhyX&_nc_tp=15&oh=3af243176f92fdd395924d7f3b46ec5b&oe=5F9F0319'
                  />
                </a>
              </Col>
              <Col sm={12} md={6} lg={8}>
                <span className={styles.Title}>
                  <span className={styles.Wave}>👋</span>
                  I'm Klevin
                </span>
                <p>Energic and self-motivated Web Developer</p>
              </Col>
            </Row>
          </Fade>
        </div>
      </div>
    </>
  );
}
