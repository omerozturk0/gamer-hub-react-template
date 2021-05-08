import React from 'react';
import Contained from '../../../_utils/contained/contained';
import LogoImage from '../../../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faShoppingBag, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';

export default function headerElements() {
  return (
    <div className="header__elements">
      <Contained colProps={{ className: 'header__elements__wrapper' }}>
        <div className="header__logo">
          <img src={LogoImage} alt="Logo" />
        </div>
        <div className="header__items">
          <div className="header__search">
            <input type="text" placeholder="Search games, gears, accessories.." />
            <button type="button">
              <i className="flaticon-search" />
            </button>
          </div>
          <div className="header__user__details__navigation">
            <ul>
              <li className="active">
                <a href="#">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faWallet} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__user__navigation">
          <ul>
            <li className="notify">
              <a href="#">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faShoppingBag} />
              </a>
            </li>
          </ul>
        </div>
      </Contained>
    </div>
  );
}
