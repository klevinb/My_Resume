import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import styles from './Skills.module.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Skills() {
  return (
    <>
      <div className={styles.About} id='skills'>
        <Fade left>
          <h1 className={styles.Heading}>Skills</h1>
        </Fade>
        <Bounce left>
          <Row className={styles.Row}>
            <Col sm={12} md={6}>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Col>
            <Col sm={12} md={6}>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Col>
          </Row>
        </Bounce>
      </div>
    </>
  );
}
