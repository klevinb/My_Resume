import React from 'react';
import SingleProject from '../../../Utilities/SingleProject';
import styles from './Projects.module.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <>
      <div className={styles.Container} id='projects'>
        <div className={styles.Project}>
          <div className={styles.SingleProject}>
            <SingleProject
              title='Spotify App Mockup'
              description='I created a mockup for the Spotify website using React, Redux,
            Bootstrap and later I will implement the login page, and then I will
use MongoDB to store the data.'
              repoLink='https://github.com/klevinb/CV-Project/tree/master/spotify_alone'
              tools='API : Deezer - RapidAPI.'
            />
          </div>
        </div>
        <div className={styles.Project1}>
          <div className={styles.SingleProject}>
            <SingleProject
              title='LinkedIn Mockup'
              description='This was a team project, we used React, Node, Express, MongoDB. 
          For the Backend we created endpoints for Posts, Photos, Experiences (CSV), CV (PDF), log in - sign up pages.
          We used JSON Web Token and socket.io for the chatrooms.'
              repoLink='https://github.com/klevinb/LinkedinBackend_TBW_FE'
              tools=''
            />
          </div>
        </div>
        <div className={styles.Project2}>
          <div className={styles.SingleProject}></div>
        </div>
      </div>
    </>
  );
}
