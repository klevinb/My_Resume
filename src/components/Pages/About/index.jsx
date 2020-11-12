import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import styles from './About.module.scss';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <>
      <div className={styles.About} id='about'>
        <Fade left>
          <h1 className={styles.Heading}>About Me</h1>
        </Fade>

        <Row className={styles.Row}>
          <Col sm={12} md={6}>
            <a
              href='https://www.linkedin.com/in/klevinbazaiti/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Image fluid src='/assets/about_me.jpg' />
            </a>
          </Col>
          <Col sm={12} md={6}>
            <p>
              I'm Klevin, a web developer focused on MERN stack but always ready
              to learn new things. Eager to work in a dynamic company to
              consolidate my skills, getting my career to the next level. Ready
              to relocate in another country if needed, I'm never scared by new
              adventures!
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
