import React from 'react';
import './segmentStyles.scss';

class WorkExperience extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="title">Work Experience</p>
        <p className="charge">Frontend Developer</p>
        <div className="subTitle">
          <p className="place">Vi-Da Tec</p>
          <p className="time">Aug 2019 - Present</p>
        </div>
        <p className="description">
          <span style={{color: '#27ade3'}}>• </span>
          Web developer for TICMAS, a platform designed for virtual education. I've worked with technologies like Angular 8, SASS, Git, Eva design
        </p>
        <p className="charge">Fullstack Developer</p>
        <div className="subTitle">
          <p className="place">Droptek</p>
          <p className="time">Sep 2018 - Aug 2019</p>
        </div>
        <p className="description">
          <span style={{color: '#27ade3'}}>• </span>
          Worked as a client partner of Banco Comafi, I've been involved in many
          internal projects including technologies like Angular 7, Sass, Node
          and AWS
        </p>
        <p className="charge">Frontend Developer</p>
        <div className="subTitle">
          <p className="place">Globant</p>
          <p className="time">Jan 2016 - Sep 2018</p>
        </div>
        <p className="description">
          <span style={{color: '#27ade3'}}>• </span>
          Worked for JP Morgan and DirectTV in the development of web apps with Javascript and React
        </p>
      </div>
    );
  }
}
export default WorkExperience;
