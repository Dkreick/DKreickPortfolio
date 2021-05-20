import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import * as firebase from 'firebase';

const styles = theme => ({
  container: {
    display: 'flex',
    margin: '0px 20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridList: {
    flexWrap: 'nowrap',
    height: '250px',
    overflowY: 'hidden',
    paddingTop: '60px',
  },
  title: {
    margin: '30px',
  },
});

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let database = firebase.database().ref();
    database.on('value', snap => {
      this.setState({
        data: snap.val(),
      });
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container} id="portfolio">
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOnce={true}
          duration={1.5}
        >
          <Typography variant="h3" className={classes.title}>
            Projects
          </Typography>
        </ScrollAnimation>
        <Grid container spacing={8}>
          {this.state.data.map((api, index) => {
            return (
              <Grid item xs={12} sm={3} key={index}>
                <ScrollAnimation
                  animateIn="fadeIn"
                  duration={index + 1}
                  animateOnce={true}
                >
                  <GameCard data={this.state.data[index]} key={index} />
                </ScrollAnimation>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);
