import React from 'react';
import FooterSubscription from './partials/FooterSubscription/FooterSubscription';
import FooterTop from './partials/FooterTop/FooterTop';
import FooterBottom from './partials/FooterBottom/FooterBottom';

export default function footer() {
  return (
    <div className="footer">
      <FooterSubscription />
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
