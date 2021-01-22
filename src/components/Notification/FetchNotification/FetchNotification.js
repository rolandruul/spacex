import React from 'react';
import Button from './../../Button/Button';
import Logo from './../../../img/LogoDark.svg';

function FetchNotification({ doYes }) {
  return (
    <>
      <img src={Logo} alt="SpaceX Logo" />
      <h2>No shipments found locally. Load external list?</h2>
      <Button
        primary 
        type="button" 
        onClick={doYes} 
        title="Yes, load" 
      />
    </>
  );
}

export default FetchNotification;