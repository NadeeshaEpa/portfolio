import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../assets/img/icons8-linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/icons8-email.svg";
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                   <div class="contact-info">
                    <h2>Get in Touch</h2>
                    <table>
                        <tr>
                            <td><strong>Name:</strong></td>
                            <td>Nadeesha Nethmini Epa</td>
                        </tr>
                        <tr>
                            <td><strong>Phone:</strong></td>
                            <td>+94 76 3414790</td>
                        </tr>
                        <tr>
                            <td><strong>Email:</strong></td>
                            <td><a href="mailto:nnadeesha128@gmail.com">
                              <div className="social-icon">
                               <img src={navIcon3} alt="Icon" />
                              </div>
                            </a></td>
                        </tr>
                        <tr>
                            <td><strong>GitHub:</strong></td>
                            <td><a href="https://github.com/NadeeshaEpa">
                              <div className="social-icon">
                               <img src={navIcon2} alt="Icon" />
                              </div>
                            </a></td>
                        </tr>
                        <tr>
                            <td><strong>LinkedIn:</strong></td>
                            <td><a href="https://www.linkedin.com/in/nadeeshaepa/">
                              <div className="social-icon">
                               <img src={navIcon1} alt="Icon" />
                              </div>
                            </a></td>
                        </tr>
                        <tr>
                            <td><strong>CV:</strong></td>
                            <td>
                                <a href="CV/cv.pdf" download="Nadeesha_Nethmini_Epa_CV.pdf">
                                    <button>Download CV</button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Current Transcript:</strong></td>
                            <td>
                                <a href="path/to/transcript.pdf" download="Nadeesha_Nethmini_Epa_Transcript.pdf">
                                    <button>Download Transcript</button>
                                </a>
                            </td>
                        </tr>
                    </table>
                  </div> 
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
