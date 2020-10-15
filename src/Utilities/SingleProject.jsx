import React, { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { AiOutlineGithub } from 'react-icons/ai';
import styles from './SingleProject.module.scss';

function SingleProject(props) {
  const [selected, setSelected] = useState('Desktop view');

  return (
    <Row className={styles.ProjectDetails}>
      <Col sm={12} md={6}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <p>{props.tools}</p>
        <a href={props.repoLink} rel='noopener noreferrer' target='_blank'>
          <Button>
            <AiOutlineGithub /> Repo Link
          </Button>
        </a>
      </Col>
      <Col sm={12} md={6}>
        <Image fluid src='/assets/SpotifyApp/spotify.jpg' />
      </Col>
    </Row>
  );
}

export default SingleProject;
