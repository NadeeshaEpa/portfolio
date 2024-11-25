import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Mobile Application Developer", "Former SE Intern at Creative Software", "Final Year Undergraduate at UCSC" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome</span>
                <h2>{`Hi! I'm Nadeesha Nethmini Epa`}</h2>
                <h2><span className="txt-rotate" dataPeriod="100" data-rotate='[ "Full Stack Developer", "Mobile Application Developer", "Former SE Intern at Creative Software", "4th Year Undergraduate" ]'><span className="wrap">{text}</span></span></h2>
                  <p> I am a dedicated and results-driven B.Sc. (Hons.) Computer Science student at the University of Colombo School of Computing, with a GPA of 3.90/4.00 and a strong record of academic achievement, including being selected for the Dean's List in both my second and third years. My passion lies in developing impactful software and exploring innovative technologies, backed by a solid foundation in front-end and back-end development.Recently, I completed a six-month internship as a Software Engineering Intern, where I gained hands-on experience in designing and implementing efficient software solutions. I am eager to bring this industry experience to future roles, applying my skills to create meaningful, user-focused applications.</p>
                  <button onClick={() => window.location.href = "#connect"} className="vvd"
                    >Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
