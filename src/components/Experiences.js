import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import DeloitteImage from '../images/deloitte.jpg';
import BoozAllenImage from '../images/boozallen.jpg';
import NorthropGrummanImage from '../images/northropgrumman.jpg';
import NRLImage from '../images/nrl.jpg';
import "react-vertical-timeline-component/style.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Experiences.css';

let timelineData = [
    {
    id: 1,
    company: "Deloitte",
    role: "Project Delivery Specialist",
    startenddate: "12/2023 to Present",
    description: "In December 2023 I started working as a Project Delivery Specialist at Deloitte as a Software Engineer. I am working to develop a high visibility enterprise search application that is used for national security. Some of the technologies include React.js, Redux, Node.js, and ElasticSearch. I also help maintain other applications in production that are stable.",
    link: "https://www.deloitte.com/",
    icon: DeloitteImage,
  },
  {
    id: 2,
    company: "Booz Allen Hamilton",
    role: "Software Engineer",
    startenddate: "9/2021 to Present",
    description: "In September 2021 I started working as a Software Engineer at Booz Allen Hamilton. I worked as a full stack developer to develop web applications. I worked with both front end and back end programming languages using technolgies like React.js, Node.js, and PostgreSQL.",
    link: "https://www.boozallen.com/",
    icon: BoozAllenImage,
  },
  {
    id: 3,
    company: "Northrop Grumman",
    role: "Pathways Software Engineer",
    startenddate: "8/2020 to 9/2021",
    description: "In August 2020 I started working as a Pathways Software Engineer at Northrop Grumman. I programmed in ABAP to develop and modify SAP reports/interfaces. I developed automations for SAP and web applications through Robotic Process Automation (RPA) using Blue Prism software. Furthermore I worked with Sharepoint to further develop our technical collaboration site.",
    link: "https://www.northropgrumman.com/",
    icon: NorthropGrummanImage,
  },
  {
    id: 4,
    company: "Northrop Grumman",
    role: "College Intern Technical (Software)",
    startenddate: "5/2019 to 8/2019",
    description: "In the summer of 2019 I worked at Northrop Grumman as a College Techinal Intern in Charlotesville, Virginia. I worked on a web application where I used HTML, Javascript, Java, and SQL to enhance this application. I participated and attended daily scrum (stand-up) meetings and biweekly change control board (CCB) meetings with my team. I worked in an agile software development environment and used JIRA software to manage and track workflow.",
    link: "https://www.northropgrumman.com/",
    icon: NorthropGrummanImage,
  },
  {
    id: 5,
    company: "Naval Research Laboratory",
    role: "Student Intern",
    startenddate: "6/2014 to 1/2017",
    description: "I worked at the U.S. Naval Research Laboratory as a Student Intern in Washington D.C. I embossed microfluidic device and conducted a variety of chemistries on them. I useded the chemically modified microfluidic devices to run assays on the molecule 2,4,6-trinitrotoluene (TNT). These devices are attached to underwater autonomous vehicles for explosive detection. I performed data analysis on signal sensing and presented results on PowerPoint during biweekly team meetings.",
    link: "https://www.nrl.navy.mil/",
    icon: NRLImage,
  },
];

function Experiences() {

  return (
    <>
      <h1 className="experiences-header">My Experiences</h1>
      <VerticalTimeline lineColor={"black"}>
        {timelineData.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              icon={<img style={{ borderRadius: 50, width: 60, height: 60 }} src={element.icon} alt="Company" draggable="false" title={element.company} />}>
              <h3 className="vertical-timeline-element-title">{element.company}</h3>
              <h5 className="vertical-timeline-element-subtitle"><i className="bi bi-bag"></i>&nbsp;{element.role}</h5>
              <p><i className="bi bi-clock"></i>&nbsp;<i>{element.startenddate}</i></p>
              <p id="experiences-description">{element.description}</p>
              <a href={element.link} target="_blank" rel="noopener noreferrer">View {element.company} Site</a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
}

export default Experiences;