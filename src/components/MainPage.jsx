import React, { useState, useEffect } from "react";
import { Image, Container } from "react-bootstrap";
import Education from "./Education";
import { Projects, Navigation, Contacts } from "../components";

const MainPage = (props) => {
  const [imgClicked, setImgClicked] = useState(false);
  const [navSelected, setSelectedNav] = useState("");
  const [day, setDay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImgClicked(true);
    }, 1500);
  }, []);

  return (
    <>
      <Container fluid className='night stars twinkling'>
        <div className='content'>
          <Navigation
            navSelected={navSelected}
            setSelectedNav={setSelectedNav}
          />
          <p>
            Hi there. My name is{" "}
            <span
              className={imgClicked ? "selected" : ""}
              onClick={() => setImgClicked(!imgClicked)}
            >
              Klevin
            </span>
            .{" "}
            {imgClicked && (
              <>
                <Image width='200px' height='200px' src='./assets/klevin.png' />
                <br />
              </>
            )}
            I am an MERN stack developer and in this page you will find
            information about my education, projects and my contacts.
          </p>
          <div className='infoSection'>
            {navSelected === "Education" && <Education />}

            {navSelected === "Projects" && <Projects />}
            {navSelected === "Contacts" && <Contacts />}
          </div>
        </div>
        <div className='dayToggle'>
          <Image
            src={day ? "/assets/switchOFF.png" : "/assets/switchON.png"}
            alt='toggle day/nigh'
            onClick={() => setDay(!day)}
          />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
