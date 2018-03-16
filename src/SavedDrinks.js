import React from 'react';

const SavedDrinks = props => {
  const show = {
    display: 'block',
  }
  const hide = {
    display: 'none'
  }

  return (
    <div style={props.show ? show : hide } className="popup-modal">
      <h3>Saved!</h3>
      <p>{ props.saved.name }</p>
    </div>
  )
}

export default SavedDrinks;
