import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GameCard from '../components/GameCard';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '84px',
  }
});

export function ContentList(props) {

  const state = {
    api: [
      {
        name: 'Another Day To Be',
        subtitle: 'RPG Game made in Unity3D.',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/AnotherDayToBe/master/Documents/Developer%20notes/GDD%20Images/CombatPreview.jpg',
        description: 'AD2B is a turn based tactics and exploration game in a devastated world. Your character will face different choices while tries to survive in a map full of dangers.',
        linkToSourceCode: 'https://github.com/Dkreick/AnotherDayToBe',
        linkDownload: 'AnotherDayToBe',
        mainLanguage: 'Unity3D'
      },
      {
        name: 'AD2B Wiki',
        subtitle: 'Wiki for Another Day To Be.',
        icon: 'Sharp',
        snapshot: '',
        description: '',
        linkToSourceCode: 'https://github.com/Dkreick/AnotherDayToBe-Web',
        linkDownload: 'AnotherDayToBeWikia',
        mainLanguage: 'Unity3D'
      },
      {
        name: 'Scan My Profile',
        subtitle: 'Info app made with Vuforia.',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/Scan-My-Profile/master/ReadmePhoto.png',
        description: 'Small app for scan my profile image and know more about me.',
        linkToSourceCode: 'https://github.com/Dkreick/Scan-My-Profile',
        linkDownload: 'ScanMyProfile',
        mainLanguage: 'Unity3D'
      },
      {
        name: 'Simple Simon',
        subtitle: 'Simple game memory game made in Unity3D',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/SimpleSimon/master/preview.png',
        description: 'Simple game memory game made in Unity3D.',
        linkToSourceCode: 'https://github.com/Dkreick/SimpleSimon',
        linkDownload: 'https://github.com/Dkreick/SimpleSimon/archive/master.zip',
        mainLanguage: 'Unity3D'
      },
      {
        name: 'Dont Travel Alone',
        subtitle: 'Booking website for motorcycle rental',
        icon: 'Sharp',
        snapshot: '',
        description: 'A little page to book any motorcycle rental made in Angular 2.',
        linkToSourceCode: 'https://github.com/Dkreick/DontTravelAlone',
        linkDownload: 'https://dont-travel-alone.herokuapp.com/',
        mainLanguage: 'Javascript'
      }
    ]
  };
  const { classes } = props;

  return (
    <div className={classes.container}>
    {state.api.map((api, index) => {
    return <GameCard data={state.api[index]} key={index}/>;
  })}
    </div>
  );
}

ContentList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContentList);