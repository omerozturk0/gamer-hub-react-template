import React from 'react';
import Contained from '../../../_utils/contained/contained';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function footerSubscription() {
  return (
    <div className="footer__subscription">
      <Contained colProps={{ className: 'footer__subscription__wrapper' }}>
        <span className="footer__subscription__label">Get your best games deals first</span>
        <div className="footer__subscription__input">
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="footer__subscription__cta">
          <button type="button">Subscribe</button>
        </div>
      </Contained>
    </div>
  );
}
