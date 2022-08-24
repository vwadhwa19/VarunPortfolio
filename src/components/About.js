import React from "react"
import '../styles/About.css';

function About() {
  return (
    <>
      <h1 className="about-header">About Me</h1>
      <div className="about-code">
        <div className="about-console">
          <p><b> Welcome to the command prompt. Learn about Varun! </b> </p>
          <br />
          &gt; Varun.location <br />
          <span>&nbsp;&nbsp;=&gt; "Germantown, Maryland"<br /><br /><br /></span>
          &gt; Varun.degree <br />
          <span>&nbsp;&nbsp;=&gt; "Computer Science"<br /><br /><br /></span>
          &gt; Varun.hobbies <br />
          <span>&nbsp;&nbsp;=&gt; "[Soccer, Swimming, Photography, Running, Traveling, Watching Sports]"<br /><br /><br /></span>
          &gt; Varun.speakingLanguages <br />
          <span>&nbsp;&nbsp;=&gt; "[English, Hindi, Spanish]"<br /><br /><br /></span>
          &gt; Varun.programmingLanguages <br />
          <span>&nbsp;&nbsp;=&gt; "[Java, HTML, CSS, Javascript, Swift, SQL]"<br /><br /><br /></span>
          &gt; Varun.favoriteCSTopics <br />
          <span>&nbsp;&nbsp;=&gt; "[Software Engineering, Database Design, Data Structures, Software Security, Algorithms]"<br /><br /><br /></span>
          &gt; Varun.favoritePlaces <br />
          <span>&nbsp;&nbsp;=&gt; "[London, New Delhi, Venice, Washington D.C.]"<br /><br /><br /></span>
          &gt; Varun.email <br />
          <span>&nbsp;&nbsp;=&gt; "varun.wadhwa19@gmail.com"<br /><br /><br /></span>
        </div>
      </div>
    </>
  )
}

export default About;