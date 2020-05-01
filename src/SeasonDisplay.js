import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    iconName: 'sun',
    text: 'Let\'s hit the beach!'
  },
  winter: {
    iconName: 'snowflake',
    text: 'Burr, it\'s chilly outside!'
  }
};

const getSeason = (lat, date) => {
  if (date > 2 && date < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { iconName, text } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left big ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;