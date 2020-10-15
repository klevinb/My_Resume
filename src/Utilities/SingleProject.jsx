import React, { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { AiOutlineGithub } from 'react-icons/ai';
import { GrHeroku } from 'react-icons/gr';
import styles from './SingleProject.module.scss';

function SingleProject(props) {
  const [selected, setSelected] = useState('Desktop view');

  return (
    <Row className={styles.ProjectDetails}>
      <Col sm={12} md={6}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <p>{props.toolsFE}</p>
        <p>{props.apis}</p>
        <p>{props.toolsBE}</p>
        {props.liveLink && (
          <a href={props.liveLink} rel='noopener noreferrer' target='_blank'>
            <Button>
              <GrHeroku /> Live Demo
            </Button>
          </a>
        )}
        <div className='d-flex jusify-flex-center'>
          {props.feLink && (
            <a href={props.feLink} rel='noopener noreferrer' target='_blank'>
              <Button>
                <AiOutlineGithub /> FE Repo Link
              </Button>
            </a>
          )}
          {props.beLink && (
            <a href={props.beLink} rel='noopener noreferrer' target='_blank'>
              <Button>
                <AiOutlineGithub /> BE Repo Link
              </Button>
            </a>
          )}
        </div>
      </Col>
      <Col sm={12} md={6} className={styles.Logo}>
        <div className={styles.Container}>
          <Image fluid src={props.logo} />
          <div className={styles.Middle}>
            <button className={styles.Button}>View Photos</button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SingleProject;
