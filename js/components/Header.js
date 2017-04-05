import React from 'react';
import ReactDOM from 'react-dom';

function Header(props) {
  return (
    <div className='row text-center bg-primary p16'>
      <div className='col-xs-12 fs16'>
        {props.title}
      </div>
    </div>
  )
}

export default Header;