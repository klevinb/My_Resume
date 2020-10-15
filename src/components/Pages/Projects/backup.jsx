import React from 'react';
import SingleProject from '../../../Utilities/SingleProject';
import styles from './Projects.module.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <>
      <div className={styles.Container} id='projects'>
        <Fade left>
          <h1 className={styles.Heading}>Projects</h1>
        </Fade>
        <div className={styles.SingleProject}></div>
        <div className={styles.SingleProject}>
          <Bounce left>
            <SingleProject
              title='LinkedIn Mockup'
              description='This was a team project, we used React, Node, Express, MongoDB. 
          For the Backend we created endpoints for Posts, Photos, Experiences (CSV), CV (PDF), log in - sign up pages.
          We used JSON Web Token and socket.io for the chatrooms.'
              repoLink='https://github.com/klevinb/LinkedinBackend_TBW_FE'
              tools=''
              photos={[
                {
                  title: 'User Page',
                  desktopView: '/assets/LinkedInApp/UsersPage.png',
                  mobileView: '',
                },
                {
                  title: 'LinkedIn User',
                  desktopView: '/assets/LinkedInApp/OtherUserPage.png',
                  mobileView: '',
                },
                {
                  title: 'Feeds Page',
                  desktopView: '/assets/LinkedInApp/FeedsPage.png',
                  mobileView: '',
                },
              ]}
            />
          </Bounce>
        </div>
        <div className={styles.SingleProject}>
          <Bounce left>
            <SingleProject
              title='Weather App'
              description='This was a solo project where I create an weather App using React, TypeScript and 3 APIs to gather the data.'
              repoLink='https://github.com/klevinb/CV-Project/tree/master/spotify_alone'
              tools='APIs : ipstack. (To find the location of the user),
            Open Weather Map - RapidAPI. (Get the weather information),
            Google Maps API. (To show pin on map the location of the search)'
              photos={[
                {
                  title: 'Main Page',
                  desktopView: '/assets/WeatherApp/MainPage.png',
                  mobileView: '/assets/WeatherApp/MainPage_mobile.png',
                },
              ]}
            />
          </Bounce>
        </div>
      </div>
    </>
  );
}
