import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Contained from '../../../_utils/contained/contained';
import Slider1 from '../../../../images/slider/slider1.png';
import Slider2 from '../../../../images/slider/slider2.jpeg';
import Slider3 from '../../../../images/slider/slider3.jpeg';

export default function carousel() {
  return (
    <div className="page-body__carousel">
      <div className="page-body__carousel__prev-item" style={{ backgroundImage: `url(${Slider2})` }} />
      <Contained>
        <div className="page-body__carousel__scene">
          <Button variant="outline-light">Prev</Button>
          <div className="page-body__carousel__scene__image" style={{ backgroundImage: `url(${Slider1})` }}>
            <div className="page-body__carousel__scene__image__description">
              Become a legendary Viking warrior raised on tales of battle and glory.
            </div>
            <div className="page-body__carousel__scene__image__dots">
              <Button variant="link">
                <FontAwesomeIcon icon={faCircle} />
              </Button>
              <Button variant="link" className="active">
                <FontAwesomeIcon icon={faCircle} />
              </Button>
              <Button variant="link">
                <FontAwesomeIcon icon={faCircle} />
              </Button>
              <Button variant="link">
                <FontAwesomeIcon icon={faCircle} />
              </Button>
            </div>
          </div>
          <Button variant="outline-light">Next</Button>
        </div>
      </Contained>
      <div className="page-body__carousel__next-item" style={{ backgroundImage: `url(${Slider3})` }} />
    </div>
  );
}
