import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Banner from './../../assets/images/BannerImage.jpeg';

const styles = theme => ({
  card: {
    flexWrap: 'wrap',
    marginLeft: '114px',
    marginRight: '114px',
    justifyContent: 'center'
  }
});

export function Header() {
  return (
    <Card>
      <CardMedia component="img" image={Banner} />
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          DAMIAN KREICK
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          I'm a self-confident programmer, enthusiast of good coding practises,
          who listens attentively and takes charge of high responsability tasks.
        </Typography>
      </CardContent>
    </Card>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
