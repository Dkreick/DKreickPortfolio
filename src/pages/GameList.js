import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GameCard from '../components/GameCard';

const styles = theme => ({
  container: {
    display: '-webkit-inline-box',
    flexWrap: 'wrap',
  }
});

export function Weapons(props) {

  const state = {
    api: [
      {
        name: 'Another Day To Be',
        subtitle: 'RPG Game made in Unity3D',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/AnotherDayToBe/master/Documents/Developer%20notes/GDD%20Images/CombatPreview.jpg',
        description: 'AD2B is a turn based tactics and exploration game in a devastated world. Your character will face different choices while tries to survive in a map full of dangers.',
        linkToSourceCode: 'https://github.com/Dkreick/AnotherDayToBe',
        linkToGame: 'AnotherDayToBe',
      },
      {
        name: 'AD2B Wiki',
        subtitle: 'Wiki for Another Day To Be',
        icon: 'Sharp',
        snapshot: 'Sharp',
        description: '',
        linkToSourceCode: 'https://github.com/Dkreick/AnotherDayToBe-Web',
        linkToGame: 'AnotherDayToBeWikia',
      },
      {
        name: 'Scan My Profile',
        subtitle: 'Info app made with Vuforia',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/Scan-My-Profile/master/ReadmePhoto.png',
        description: 'Small app for scan my profile image and know more about me',
        linkToSourceCode: 'https://github.com/Dkreick/Scan-My-Profile',
        linkToGame: 'ScanMyProfile',
      },
      {
        name: 'Simple Simon',
        subtitle: 'Simple game memory game made in Unity3D',
        icon: 'Sharp',
        snapshot: 'https://raw.githubusercontent.com/Dkreick/SimpleSimon/master/preview.png',
        description: 'Another Day To Be is a turn based tactics and exploration game in a devastated world. Your character will face different choices while tries to survive in a map full of dangers.',
        linkToSourceCode: 'https://github.com/Dkreick/SimpleSimon',
        linkToGame: 'SimpleSimon',
      },
    ]
  };
  const { classes } = props;

  return (
    <div className={classes.container}>
    {state.api.map((api, index) => {
    return <GameCard data={state.api[index]} />;
  })}
    </div>
  );
}

Weapons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Weapons);
