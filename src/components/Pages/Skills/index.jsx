import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import styles from './Skills.module.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Skills() {
  return (
    <>
      <div className={styles.Container} id='skills'>
        <Fade left>
          <h1 className={styles.Heading}>Skills</h1>
        </Fade>
        <Bounce left>
          <Row className={styles.Row}>
            <Col sm={6} md={4} lg={2} className={styles.Col}>
              <Image src='https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png' />
              <h3>MongoDB</h3>
            </Col>
            <Col sm={6} md={4} lg={2} className={styles.Col}>
              <Image src='http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg' />
              <h3>Express Js</h3>
            </Col>
            <Col sm={6} md={4} lg={2} className={styles.Col}>
              <Image src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
              <h3>React Js</h3>
            </Col>
            <Col sm={6} md={4} lg={2} className={styles.Col}>
              <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' />
              <h3>Node Js</h3>
            </Col>
            <Col sm={6} md={4} lg={2} className={styles.Col}>
              <Image src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' />
              <h3>Redux</h3>
            </Col>
          </Row>
        </Bounce>
      </div>
    </>
  );
}
