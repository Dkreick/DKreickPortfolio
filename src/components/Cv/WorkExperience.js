import React from 'react';
import './segmentStyles.scss';

class WorkExperience extends React.Component {

  render() {

    return (
      <div className='container'>
        <p className='title'>Work Experience</p>
        <p className='charge'>Web & Game Developer</p>
        <div className='subTitle' >
          <p className='place'>Vi-Da Tec</p>
          <p className='time'>Aug 2019 - Present</p>
        </div>
        <p className='description'>TODO</p>
        <p className='charge'>Fullstack Developer</p>
        <div className='subTitle' >
          <p className='place'>Droptek</p>
          <p className='time'>Sep 2018 - Aug 2019</p>
        </div>
        <p className='description'>Worked as a client partner of Banco Comafi, I've been involved in many internal projects including technologies like Angular 7, Sass, Node and AWS</p>
        <p className='charge'>Frontend Developer</p>
        <div className='subTitle' >
          <p className='place'>Globant</p>
          <p className='time'>Jan 2016 - Sep 2018</p>
        </div>
        <p className='description'>• Worked for J.P Morgan and DirectTV.<br />
          • Solves Visual and implementation problems.<br />
          • Analyzes issues and its priorities.<br />
          • Creates design and experience ideas.<br />
          • Gathers information and document it.<br />
          • Delivers code with high coverage rate.<br />
          • Teaches others the good practises of Agile Methodology.<br />
        </p>
      </div>
    );
  }
}
  export default WorkExperience;
