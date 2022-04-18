import { faCopyright, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='m-5 p-3 text-center'>
          <button><FontAwesomeIcon icon={faPlay} /> Google Play</button>
          <br />
          <br />
          <p>Copyright <FontAwesomeIcon icon={faCopyright} /> {year} Travel-guide.com</p>
      </footer>
    );
};

export default Footer;