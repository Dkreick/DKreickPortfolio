import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Header from './Header';
import Footer from './Footer';

const styles = theme => ({
  container: {
    flexWrap: 'wrap'
  }
});

export function Home(props) {
  const {classes} = props;

  return (
    <div className={classes.container}>
      <Header />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
