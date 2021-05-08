import React from 'react';
import { Container } from 'react-bootstrap';
import Row from '../../../_utils/row/row';
import VisaImage from '../../../../images/visa.svg';
import MastercardImage from '../../../../images/mastercard.svg';
import PaypalImage from '../../../../images/paypal.svg';

export default function footerBottom() {
  return (
    <div className="footer__bottom">
      <Container>
        <Row rowProps={{ className: 'footer__bottom__wrapper' }}>
          <div className="footer__bottom__copyright">
            Copyright © 2020. All Rights Reserved. <br />
            Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy. All copyrights,
            trade marks, service marks belong to the corresponding owners.
          </div>
          <div className="footer__bottom__payment_methods">
            <ul>
              <li>
                <img src={VisaImage} alt="Visa" />
              </li>
              <li>
                <img src={MastercardImage} alt="Mastercard" />
              </li>
              <li>
                <img src={PaypalImage} alt="Paypal" />
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
}
