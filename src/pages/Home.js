import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Portfolio from '../components/Portfolio/Portfolio';
import Resume from '../components/Resume/Resume';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const styles = theme => ({
  container: {
    flexWrap: 'wrap',
    marginTop: '100px'
  },
});

export function Home(props) {

  const { classes } = props;

  return (
    <div className={classes.container}>
      <Header/>
      <Portfolio/>
      <Resume/>
      <Footer/>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
