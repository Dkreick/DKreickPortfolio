import React from 'react';
import './segmentStyles.scss';

class Languages extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="title">Languages</p>
        <p className="charge">English</p>
        <p className="subTitle">Advanced level, I can hold a technical talk!</p>
        <p className="charge">German</p>
        <p className="subTitle">Basic, just starting!</p>
        <p className="charge">Spanish</p>
        <p className="subTitle">Native</p>
      </div>
    );
  }
}

export default Languages;
