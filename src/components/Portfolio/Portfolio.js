import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GameCard from './GameCard';
import Grid from '@material-ui/core/Grid';
import apps from './../../assets/data/apps.json';
// import ArtCard from './ArtCard';
// import art from './../../assets/data/art.json';
// import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  gridList: {
    flexWrap: 'nowrap',
    height: '250px',
    overflowY: 'hidden',
    paddingTop: '60px'
  },
  title: {
    margin: '30px'
  }
});

export function Portfolio(props) {
  const {classes} = props;

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
        {apps.map((api, index) => {
          return (
            <Grid item xs={12} sm={3} key={index}>
              <ScrollAnimation
                animateIn="fadeIn"
                duration={index + 1}
                animateOnce={true}
              >
                <GameCard data={apps[index]} key={index} />
              </ScrollAnimation>
            </Grid>
          );
        })}
      </Grid>
      {/* <ScrollAnimation
        animateIn="bounceInLeft"
        animateOnce={true}
        duration={1.5}
      >
        <Typography variant="h3" className={classes.title}>
          Also I defend myself as an artist...
        </Typography>
      </ScrollAnimation>
      <GridList className={classes.gridList} cols={2.5}>
        {art.map((api, index) => {
          return <ArtCard data={art[index]} key={index} />;
        })}
      </GridList> */}
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
