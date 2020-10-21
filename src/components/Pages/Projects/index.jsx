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
        <div className={styles.Project}>
          <div className={styles.SingleProject}>
            <SingleProject
              title='YOLO - You Only Live Once'
              description='This was my solo capstone, where I build an app which is a 
              mix between EventBrite but mostly party events and a social app.
               This app was created for people that want to party everyday and 
              they are open to create new friendships'
              feLink='https://github.com/klevinb/Solo_Capstone_FE'
              liveLink='https://yolowebsitefe.herokuapp.com'
              beLink='https://github.com/klevinb/Solo_Capstone_BE'
              toolsFE='Front End : React, Bootstrap, MaterialUI'
              toolsBE='Back End : Node, Express, MongoDb, JWT, Socketio, Sendgrid, PdfMake, Facebook OAuth'
              logo='/assets/YoloApp/yolo.png'
              photos={[
                {
                  title: 'Landing Page',
                  desktopView: '/assets/YoloApp/LandingPage.png',
                  mobileView: '/assets/YoloApp/LandingPage_mobile.png',
                },
                {
                  title: 'Album Page',
                  desktopView: '/assets/YoloApp/Profile.png',
                  mobileView: '/assets/YoloApp/Profile_mobile.png',
                },
                {
                  title: 'Favorite Page',
                  desktopView: '/assets/YoloApp/Events.png',
                  mobileView: '/assets/YoloApp/Events_mobile.png',
                },
                {
                  title: 'Search Page',
                  desktopView: '/assets/YoloApp/Posts.png',
                  mobileView: '/assets/YoloApp/Posts_mobile.png',
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.Project1}>
          <div className={styles.SingleProject}>
            <SingleProject
              title='Spotify App Mockup'
              description='I created a mockup for the Spotify website using React, Redux,
            Bootstrap and later I will implement the login page, and then I will
use MongoDB to store the data.'
              feLink='https://github.com/klevinb/CV-Project/tree/master/spotify_alone'
              liveLink=''
              beLink='https://github.com/klevinb/Spotify_Backend'
              apis='API : Deezer - RapidAPI.'
              toolsFE='Front End : React, Bootstrap'
              toolsBE='Back End : Node, Express, MongoDb, JWT'
              logo='/assets/SpotifyApp/spotify.jpg'
              photos={[
                {
                  title: 'Home Page',
                  desktopView: '/assets/SpotifyApp/Home_page.jpg',
                  mobileView: '/assets/SpotifyApp/Home_page_mobile.png',
                },
                {
                  title: 'Album Page',
                  desktopView: '/assets/SpotifyApp/Album_page.jpg',
                  mobileView: '/assets/SpotifyApp/Album_page_mobile.png',
                },
                {
                  title: 'Favorite Page',
                  desktopView: '/assets/SpotifyApp/Favorite_page.jpg',
                  mobileView: '/assets/SpotifyApp/Favorite_page_mobile.png',
                },
                {
                  title: 'Search Page',
                  desktopView: '/assets/SpotifyApp/Search_page.jpg',
                  mobileView: '/assets/SpotifyApp/Search_page_mobile.png',
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.Project2}>
          <div className={styles.SingleProject}>
            <SingleProject
              title='LinkedIn Mockup'
              description='This was a team project, we used React, Node, Express, MongoDB. 
          For the Backend we created endpoints for Posts, Photos, Experiences (CSV), CV (PDF), log in - sign up pages.
          We used JSON Web Token and socket.io for the chatrooms.'
              feLink='https://github.com/klevinb/LinkedinBackend_TBW_FE'
              liveLink=''
              beLink='https://github.com/klevinb/LinkedinBackend_TBW_AUTH'
              tools=''
              logo='/assets/LinkedInApp/linkedin.png'
              photos={[
                {
                  title: 'User Page',
                  desktopView: '/assets/LinkedInApp/UsersPage.png',
                  mobileView: '/assets/LinkedInApp/UsersPage_mobile.png',
                },
                {
                  title: 'LinkedIn User',
                  desktopView: '/assets/LinkedInApp/OtherUserPage.png',
                  mobileView: '/assets/LinkedInApp/OtherUserPage_mobile.png',
                },
                {
                  title: 'Feeds Page',
                  desktopView: '/assets/LinkedInApp/FeedsPage.png',
                  mobileView: '/assets/LinkedInApp/FeedsPage_mobile.png',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
