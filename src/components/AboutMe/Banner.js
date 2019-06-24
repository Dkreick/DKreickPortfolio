import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BannerActions from './BannerActions';
import Banner from './../../assets/BannerImage.jpeg';

const styles = theme => ({
  card: {
    flexWrap: 'wrap',
    marginLeft: '114px',
    marginRight: '114px',
    justifyContent: 'center'
  }
});

export function BannerImage(props) {

  const { classes } = props;

  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          image={Banner}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            Damian Kreick
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I'm a sefl-confident programmer, enthusiast of good coding practises, who listens attentively and takes charge of high responsability tasks
          </Typography>
        </CardContent>
        <BannerActions />
    </Card>
  );
}

BannerImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BannerImage);