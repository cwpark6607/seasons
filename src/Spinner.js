import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loadder">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loadding'
}

export default Spinner;