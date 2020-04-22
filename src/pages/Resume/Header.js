import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class Header extends React.Component {
  render (){
  return (
    <Card>
    <CardContent className="header">
      <Typography gutterBottom variant="h2" component="h2">
        Damian Kreick
      </Typography>
      <Typography variant="h5" color="textSecondary" component="h5">
        Frontend Developer
      </Typography>
    </CardContent>
  </Card>
  )
  }
}

export default Header;