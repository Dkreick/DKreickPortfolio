import React from 'react';
import './segmentStyles.scss';

class ValuableSkills extends React.Component {

  render() {

    return (
      <div className='container'>
        <p className='title'>Valuable Skills</p>
        <p className='charge'>Programming Languages</p>
        <p className='subTitle'>Javascript, C#, C++, ActionScript3, Python</p>
        <p className='charge'>Web Developent Tools</p>
        <p className='subTitle'>HTML5, SASS, Bootstrap, Angular 7, React</p>
        <p className='charge'>Version Control and IDEs</p>
        <p className='subTitle'>Github, Gitlab, Git, VSCode, Sublime, Tower</p>
        <p className='charge'>Design</p>
        <p className='subTitle'>Illustrator, Photoshop, Material design</p>
        <p className='charge'>Unit Testing</p>
        <p className='subTitle'>Karma, Jasmine, Cucumber</p>
        <p className='charge'>Methodologies</p>
        <p className='subTitle'>Kanban, Agile Scrum, TDD, BDD</p>
      </div>
    );
  }
}
  export default ValuableSkills;
