import React from 'react';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationIcon from '@material-ui/icons/LocationOn';
class HeaderActions extends React.Component {
  render() {
    return (
      <div className="header-actions">
        <div className="data">
          <Typography gutterBottom variant="body" component="p">
            <CalendarIcon /> 29/06/1994
      </Typography>
          <Typography gutterBottom variant="body" component="p">
            <EmailIcon /> damian.kreick@gmail.com
      </Typography>
          <Typography gutterBottom variant="body" component="p">
            <PhoneIcon /> (+54) 11-3330-2076
      </Typography>
          <Typography gutterBottom variant="body" component="p">
            <LocationIcon /> Buenos Aires, Argentina
      </Typography>
        </div>
        <Typography gutterBottom variant="body" component="p">
          I'm a self-taught web developer specialized on Javascript technologies, I have experience on Unity3D and Agile Methodology.
        <br />
        Also I'm capable of handling minor design tasks.
      </Typography>
      </div>
    );
  }
}

export default HeaderActions;
