import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fago.jfif";
import projImg2 from "../assets/img/venture.jpeg";
import projImg3 from "../assets/img/todo.jpg";
import projImg4 from "../assets/img/care.png";
import projImg5 from "../assets/img/newjob.jpg";
import projImg6 from "../assets/img/webserver.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "VentureVerse: Empowering Sri Lankan Innovation and Entrepreneurship",
      description: "VentureVerse is an innovative platform designed to support entrepreneurship in Sri Lanka by connecting aspiring entrepreneurs with potential investors, mentors, and financial support. The platform allows users to create profiles, showcase projects, and engage in virtual pitch sessions. Key features include secure communication channels, data-driven insights, and gamification elements to enhance user engagement. Built with Spring Boot, React, and PostgreSQL, and hosted on AWS, VentureVerse aims to drive economic growth by fostering collaboration between entrepreneurs and investors in Sri Lanka.",
      imgUrl: projImg2,
    },
    {
      title: "FAGO: A Revolutionary Online Gas Delivery System",
      description: "FAGO is an innovative platform designed to connect gas agents, customers, and delivery personnel seamlessly, transforming the traditional gas cylinder purchasing and delivery process. The platform allows gas agents to manage their inventory and pricing, customers to easily order and schedule gas cylinder deliveries, and delivery personnel to ensure prompt and secure service.Key features include an intuitive user interface for customers, real-time tracking for deliveries, a secure payment gateway, and an efficient admin dashboard for managing operations. FAGO aims to enhance customer satisfaction, boost sales for gas agents, and streamline operations, ultimately revolutionizing the gas delivery industry.",
      imgUrl: projImg1,
    },
    {
      title: "TODO App: A Simple Task Management Application",
      description: "ToDo is a basic task manager application designed for Android 5.0 (Lollipop) and above, offering features such as task creation and management, categorization, reminders and notifications, prioritization, task notes and attachments, search and filtering, data synchronization, and user support. The application’s frontend was developed using Flutter, while the backend was implemented with Dart and SQLite.",
      imgUrl: projImg3,
    },
    {
      title: "Care and Cure: A Health and Wellness Platform",
      description: "Care and Cure is a basic hospital management system developed using the MERN stack as part of a university module on Rapid Application Development (RAD). The system facilitates managing hospital staff, appointments, inventory, and other essential operations. Through this project, hands-on experience in full-stack application development with the MERN stack was gained, alongside practicing key principles of rapid application development.",
      imgUrl: projImg4,
    },
    {
      title: "JobSync: A Smart Platform for Job Seekers and Employers",
      description: "JobSync App, developed using Flutter, bridges the gap between job seekers and employers with a streamlined and user-friendly experience. The app includes features such as job filtering, enabling users to find opportunities based on their preferences and skills, job creation, allowing employers to post openings with detailed descriptions, application submission, providing candidates a seamless way to apply for jobs, and interview scheduling, facilitating efficient communication between both parties. This innovative solution was developed as part of the MAdhack 2024 competition and was recognized for its impact and functionality, earning a spot in the final round as one of the top 8 teams.",
      imgUrl: projImg5,
    },
    {
      title: "CWebServer: A High-Performance Web Server Built in C",
      description: "CWebServer is a simple yet efficient web server developed using the C programming language. It is designed to handle client requests, serve static and dynamic content, and manage multiple simultaneous connections with optimizations for performance. The server supports basic HTTP functionality, including handling GET and POST requests, managing file types, and ensuring seamless response delivery with features like non-blocking I/O and efficient resource management",
      imgUrl: projImg6,
    },
  ];

  const webprojects =[
    {
      title: "VentureVerse: Empowering Sri Lankan Innovation and Entrepreneurship",
      description: "VentureVerse is an innovative platform designed to support entrepreneurship in Sri Lanka by connecting aspiring entrepreneurs with potential investors, mentors, and financial support. The platform allows users to create profiles, showcase projects, and engage in virtual pitch sessions. Key features include secure communication channels, data-driven insights, and gamification elements to enhance user engagement. Built with Spring Boot, React, and PostgreSQL, and hosted on AWS, VentureVerse aims to drive economic growth by fostering collaboration between entrepreneurs and investors in Sri Lanka.",
      imgUrl: projImg2,
    },
    {
      title: "FAGO: A Revolutionary Online Gas Delivery System",
      description: "FAGO is an innovative platform designed to connect gas agents, customers, and delivery personnel seamlessly, transforming the traditional gas cylinder purchasing and delivery process. The platform allows gas agents to manage their inventory and pricing, customers to easily order and schedule gas cylinder deliveries, and delivery personnel to ensure prompt and secure service.Key features include an intuitive user interface for customers, real-time tracking for deliveries, a secure payment gateway, and an efficient admin dashboard for managing operations. FAGO aims to enhance customer satisfaction, boost sales for gas agents, and streamline operations, ultimately revolutionizing the gas delivery industry.",
      imgUrl: projImg1,
    },
    {
      title: "Care and Cure: A Health and Wellness Platform",
      description: "Care and Cure is a basic hospital management system developed using the MERN stack as part of a university module on Rapid Application Development (RAD). The system facilitates managing hospital staff, appointments, inventory, and other essential operations. Through this project, hands-on experience in full-stack application development with the MERN stack was gained, alongside practicing key principles of rapid application development.",
      imgUrl: projImg4,
    },
  ];

  const mobileprojects = [
    {
      title: "TODO App: A Simple Task Management Application",
      description: "ToDo is a basic task manager application designed for Android 5.0 (Lollipop) and above, offering features such as task creation and management, categorization, reminders and notifications, prioritization, task notes and attachments, search and filtering, data synchronization, and user support. The application’s frontend was developed using Flutter, while the backend was implemented with Dart and SQLite.",
      imgUrl: projImg3,
    },
    {
      title: "JobSync: A Smart Platform for Job Seekers and Employers",
      description: "JobSync App, developed using Flutter, bridges the gap between job seekers and employers with a streamlined and user-friendly experience. The app includes features such as job filtering, enabling users to find opportunities based on their preferences and skills, job creation, allowing employers to post openings with detailed descriptions, application submission, providing candidates a seamless way to apply for jobs, and interview scheduling, facilitating efficient communication between both parties. This innovative solution was developed as part of the MAdhack 2024 competition and was recognized for its impact and functionality, earning a spot in the final round as one of the top 8 teams.",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I have contributed to several projects with and without the use of frameworks. I have experience in working with different technologies and have worked on projects that are both web applications and mobile applications. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile Applications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          webprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>             
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          mobileprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background decoration"></img>
    </section>
  );
}
