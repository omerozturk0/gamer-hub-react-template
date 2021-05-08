import React from 'react';
import { Container } from 'react-bootstrap';
import Row from '../../../_utils/row/row';
import LogoImage from '../../../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function footerTop() {
  return (
    <div className="footer__top">
      <Container>
        <Row>
          <div className="footer__top__menu">
            <div className="footer__top__menu__col">
              <div className="footer__top__menu__heading">LA3EB</div>
              <ul className="footer__top__menu__list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__top__menu__col">
              <div className="footer__top__menu__heading">HELP</div>
              <ul className="footer__top__menu__list">
                <li>
                  <a href="#">Support Hub</a>
                </li>
                <li>
                  <a href="#">How to activate Games</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy & Cookies</a>
                </li>
                <li>
                  <a href="#">Returns & Refunds</a>
                </li>
              </ul>
            </div>
            <div className="footer__top__menu__col">
              <div className="footer__top__menu__heading">BUSINESS</div>
              <ul className="footer__top__menu__list">
                <li>
                  <a href="#">Business Center</a>
                </li>
                <li>
                  <a href="#">Selling on La3eb</a>
                </li>
                <li>
                  <a href="#">Developer & Publisher</a>
                </li>
                <li>
                  <a href="#">Marketing Partnership</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__top__social">
            <div className="footer__top__social__col footer__top__social__col--horizontal">
              <div className="footer__top__social__col__img">
                <img src={LogoImage} alt="Footer Logo" className="footer__top__social__col__logo" />
              </div>
              <div className="footer__top__social__col__info">
                <div className="footer__top__social__col__heading">Install the app</div>
                <div className="footer__top__social__col__text">Get great deals on games wherever you go!</div>
              </div>
            </div>
            <div className="footer__top__social__col footer__top__social__col--vertical">
              <div className="footer__top__social__col__img">
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <div className="footer__top__social__col__info">
                <div className="footer__top__social__col__text">
                  Get it on <br /> Google Play©
                </div>
              </div>
            </div>
            <div className="footer__top__social__col footer__top__social__col--vertical">
              <div className="footer__top__social__col__img">
                <FontAwesomeIcon icon={faAppleAlt} />
              </div>
              <div className="footer__top__social__col__info">
                <div className="footer__top__social__col__text">
                  Download on the <br /> App Store®
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
