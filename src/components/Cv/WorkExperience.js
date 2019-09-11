import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    marginLeft: '114px',
    marginRight: '114px',
  },
  title: {
    backgroundColor: '#27ade3',
    color: 'white',
    fontSize: '26px',
    padding: '7px',
    paddingLeft: '20px',
    textAlign: 'left'
  },
  charge: {
    display: 'flex',
    fontSize: '24px',
    marginTop: '-5px'
  },
  subTitle: {
    display: 'flex',
    color: 'gray',
    marginTop: '-15px'
  },
  place: {
    width: '50%',
    textAlign: 'left'
  },
  time: {
    width: '50%',
    textAlign: 'right'
  },
  description: {
    marginTop: '0px',
    marginBottom: '30px',
    textAlign: 'left'
  }
};

class WorkExperience extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <p className={classes.title}>Work Experience</p>
        <p className={classes.charge}>Fullstack Developer</p>
        <div className={classes.subTitle} >
          <p className={classes.place}>Droptek</p>
          <p className={classes.time}>Sep 2018 - Present</p>
        </div>
        <p className={classes.description}>Worked as a client partner of Banco Comafi, I've been involved in many internal projects including technologies like Angular 7, Sass, Node and AWS</p>
        <p className={classes.charge}>Frontend Developer</p>
        <div className={classes.subTitle} >
          <p className={classes.place}>Globant</p>
          <p className={classes.time}>Jan 2016 - Sep 2018</p>
        </div>
        <p className={classes.description}>Worked as a client partner of Banco Comafi, I've been involved in many internal projects including technologies like Angular 7, Sass, Node and AWS</p>
      </div>
    );
  }
}

export default withStyles(styles)(WorkExperience);
