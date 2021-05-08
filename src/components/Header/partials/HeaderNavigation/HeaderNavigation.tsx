import React from 'react';
import Contained from '../../../_utils/contained/contained';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faThLarge, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function headerNavigation() {
  return (
    <div className="header__navigation">
      <Contained colProps={{ className: 'header__navigation__wrapper' }}>
        <ul>
          <li className="active">
            <a href="#">
              <FontAwesomeIcon icon={faThLarge} />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGamepad} />
              Social
            </a>
          </li>
          <li>
            <a href="#">
              <i className="flaticon-market" />
              Market
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTrophy} />
              Tournaments
            </a>
          </li>
        </ul>
      </Contained>
    </div>
  );
}
