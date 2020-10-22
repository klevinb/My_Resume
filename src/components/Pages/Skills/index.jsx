import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import styles from './Skills.module.scss';
import Fade from 'react-reveal/Fade';

export default function Skills() {
  return (
    <>
      <div className={styles.Container} id='skills'>
        <Fade left>
          <h1 className={styles.Heading}>Skills</h1>
        </Fade>

        <Row className={styles.Row}>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png' />
            <h3>MongoDB</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://buttercms.com/static/images/tech_banners/ExpressJS.png' />
            <h3>Express Js</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
            <h3>React Js</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' />
            <h3>Node Js</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' />
            <h3>Redux</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://strive.school/assets/ai/heroku_logo.png' />
            <h3>Heroku</h3>
          </Col>
        </Row>
        <Row className={styles.Row}>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://pbs.twimg.com/media/Eejl8edX0AA_8fA.png' />
            <h3>Azure</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://www.enterprisedb.com/sites/default/files/logo-postgresql-700x500.png' />
            <h3>PostgreSQL</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png' />
            <h3>JavaScript</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://res.cloudinary.com/practicaldev/image/fetch/s--kh56iRdU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/7c7w2ydov91nv762l4c4.png' />
            <h3>TypeScript</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Bootstrap-512.png' />
            <h3>Bootstrap</h3>
          </Col>
          <Col xs={6} md={4} lg={2} className={styles.Col}>
            <Image src='https://material-ui.com/static/logo.png' />
            <h3>Material UI</h3>
          </Col>
        </Row>
      </div>
    </>
  );
}
