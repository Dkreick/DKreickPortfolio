import React from 'react';
import './segmentStyles.scss';

class Education extends React.Component {

  render() {

    return (
      <div className='container'>
        <p className='title'>Education</p>
        <p className='charge'>Game Developer Technician</p>
        <div className='subTitle' >
          <p className='place'>Escuela DaVinci</p>
          <p className='time'>Jan 2014 - Dic 2015</p>
        </div>
        <p className='description'>Involves the creation of a video game in all aspects, from the sketch to the programming and marketing.
        </p>
      </div>
    );
  }
}
export default Education;
