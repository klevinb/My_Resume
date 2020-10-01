import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import styles from './About.module.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <>
      <div className={styles.About} id='about'>
        <Fade left>
          <h1 className={styles.Heading}>About Me</h1>
        </Fade>
        <Bounce left>
          <Row className={styles.Row}>
            <Col sm={12} md={6}>
              <a
                href='https://www.linkedin.com/in/klevinbazaiti/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  fluid
                  src='https://instagram.fosl4-1.fna.fbcdn.net/v/t51.2885-15/e35/40634221_454554298399748_272423315954466816_n.jpg?_nc_ht=instagram.fosl4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=TA9P3GYq8GQAX-sEjzM&_nc_tp=18&oh=3672ae2e966899a727e10e9270eedd90&oe=5FA040EB'
                />
              </a>
            </Col>
            <Col sm={12} md={6}>
              <p>
                I'm Klevin, a web developer focused on MERN stack but always
                ready to learn new things. Eager to work in a dynamic company to
                consolidate my skills, getting my career to the next level.
                Ready to relocate in another Country, if needed, I'm never
                scared by new adventures!
              </p>
            </Col>
          </Row>
        </Bounce>
      </div>
    </>
  );
}
