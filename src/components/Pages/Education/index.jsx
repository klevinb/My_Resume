import React from 'react';
import {
  Image,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  ListGroup,
} from 'react-bootstrap';
import styles from './Education.module.scss';
import Fade from 'react-reveal/Fade';

export default function Education() {
  return (
    <>
      <div className={styles.Container} id='education'>
        <div className={styles.Education}>
          <Fade left>
            <h1 className={styles.Heading}>Education</h1>
          </Fade>

          <Row className={styles.Row}>
            <Col sm={12} md={6}>
              <a
                href='https://uniel.ems.al/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  fluid
                  className={styles.Uni}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Universiteti_i_Elbasanit_%22Aleksand%C3%ABr_Xhuvani%22.svg/1200px-Universiteti_i_Elbasanit_%22Aleksand%C3%ABr_Xhuvani%22.svg.png'
                />
              </a>
            </Col>
            <Col sm={12} md={6}>
              <span>"Aleksander Xhuvani" University - Elbasan, Albania</span>
              <p className='titles'>Bachelor in IT</p>
              <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                  <p>Starting date</p>
                  <p>15-10-2016</p>
                </div>
                <div className='d-flex flex-column'>
                  <p>Ending date</p>
                  <p>20-07-2019</p>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <Accordion defaultActiveKey='0'>
                  <Card className={styles.Card}>
                    <Card.Header className={styles.CardHeader}>
                      <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                        Tech Stack
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                      <Card.Body className={styles.CardBody}>
                        <ListGroup className={styles.ListGroup}>
                          <ListGroup.Item>Programming Languages</ListGroup.Item>
                          <ListGroup.Item>OOP</ListGroup.Item>
                          <ListGroup.Item>Web Development</ListGroup.Item>
                        </ListGroup>
                        <ListGroup className={styles.ListGroup}>
                          <ListGroup.Item>Databases</ListGroup.Item>
                          <ListGroup.Item>Algorithms</ListGroup.Item>
                          <ListGroup.Item>Operation Systems</ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
          </Row>

          <Row className={styles.Row}>
            <Col sm={12} md={6}>
              <a
                href='https://strive.school/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  fluid
                  src='https://scontent.fosl4-2.fna.fbcdn.net/v/t1.0-9/106021628_677337352815317_3039720649727959783_o.png?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=RsPqzUbHG9YAX_x6nSv&_nc_ht=scontent.fosl4-2.fna&oh=1ac9a7a0b5668705955b9eaade4062af&oe=5F98FA08'
                />
              </a>
            </Col>
            <Col sm={12} md={6}>
              <span>STRIVE School - Berlin, Germany</span>
              <p className='titles'>6 months online coding course</p>
              <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                  <p>Starting date</p>
                  <p>15-04-2020</p>
                </div>
                <div className='d-flex flex-column'>
                  <p>Ending date</p>
                  <p>30-09-2020</p>
                </div>
              </div>

              <div className='d-flex justify-content-center'>
                <Accordion defaultActiveKey='0'>
                  <Card className={styles.Card}>
                    <Card.Header className={styles.CardHeader}>
                      <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                        Tech Stack
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                      <Card.Body className={styles.CardBody}>
                        <ListGroup className={styles.ListGroup}>
                          <ListGroup.Item>HTML/CSS/JS</ListGroup.Item>
                          <ListGroup.Item>MongoDB</ListGroup.Item>
                          <ListGroup.Item>TypeScript</ListGroup.Item>
                        </ListGroup>
                        <ListGroup className={styles.ListGroup}>
                          <ListGroup.Item>React</ListGroup.Item>
                          <ListGroup.Item>Express</ListGroup.Item>
                          <ListGroup.Item>PostgreSQL</ListGroup.Item>
                        </ListGroup>
                        <ListGroup className={styles.ListGroup}>
                          <ListGroup.Item>Node.js</ListGroup.Item>
                          <ListGroup.Item>Bootstrap4</ListGroup.Item>
                          <ListGroup.Item>Git</ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
          </Row>

          <Fade left>
            <h1 className={styles.Heading}>Experience</h1>
          </Fade>

          <Row className={styles.Row}>
            <Col sm={12} md={6}>
              <a
                href='https://www.furim.no/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  fluid
                  className={styles.Furim}
                  src='https://www.furim.no/wp-content/uploads/2018/09/farmto-table-2-2.jpg'
                />
              </a>
            </Col>
            <Col sm={12} md={6}>
              <span>FURIM Institutt - Oslo, Norway</span>
              <p className='titles'>European Voluntary Service (EVS) Project</p>
              <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                  <p>Starting date</p>
                  <p>02-11-2019</p>
                </div>
                <div className='d-flex flex-column'>
                  <p>Ending date</p>
                  <p>31-10-2020</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
