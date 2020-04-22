import React from 'react';
import './segmentStyles.scss';

class ValuableSkills extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="title">Valuable Skills</p>

        <p className="charge">Programming Languages</p>
        <p className="subTitle">C, C++, C#, Javascript, Python, Node.</p>

        <p className="charge">Web Developent Tools</p>
        <p className="subTitle">HTML5, SASS, Bootstrap, Angular 8, React 16.</p>

        <p className="charge">Version Control and IDEs</p>
        <p className="subTitle">
          Git, Github, Gitlab, Bitbucket, VSCode, Sublime, Tower.
        </p>

        <p className="charge">Design</p>
        <p className="subTitle">
          Illustrator, Photoshop, Audacity, Sony Vegas.
        </p>

        <p className="charge">Unit Testing</p>
        <p className="subTitle">Karma, Jasmine, Cucumber.</p>

        <p className="charge">Methodologies</p>
        <p className="subTitle">Kanban, Agile Scrum, TDD, BDD.</p>
      </div>
    );
  }
}

export default ValuableSkills;
