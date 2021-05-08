import React from 'react';
import Contained from '../../../_utils/contained/contained';
import { Button } from 'react-bootstrap';
import Wow from '../../../../images/games/wow.webp';
import Nfs from '../../../../images/games/nfs.webp';
import Wdl from '../../../../images/games/wdl.webp';
import Bld2 from '../../../../images/games/bld2.webp';
import Fm21 from '../../../../images/games/fm21.webp';

export default function upcomingGames() {
  return (
    <div className="page-body__upcoming-games">
      <Contained>
        <div className="page-body__section__heading">
          <div className="page-body__section__heading__text">Upcoming Games</div>
          <div className="page-body__section__heading__text page-body__section__heading__text--small">
            Pre-order an upcoming game to start playing on Day 1.
          </div>
          <button type="button" className="theme-btn">
            Discover All
          </button>
        </div>
        <div className="page-body__upcoming-games__content">
          <div className="page-body__upcoming-games__listing">
            <div className="page-body__upcoming-games__list-item">
              <img src={Wow} alt="World of Warcraft" />
              <div className="page-body__upcoming-games__list-item__name">
                World of Warcraft: Shadowlands (Heroic Edition)
              </div>
              <div className="page-body__upcoming-games__list-item__price">€22.50</div>
              <div className="page-body__upcoming-games__list-item__discount">
                <span className="page-body__upcoming-games__list-item__discount-price">€22.50</span>
                <span className="page-body__upcoming-games__list-item__discount-rate">62% OFF</span>
              </div>
              <Button variant="primary" className="page-body__upcoming-games__list-item__cta">
                Pre Order
              </Button>
            </div>
            <div className="page-body__upcoming-games__list-item">
              <img src={Nfs} alt="Need for Speed" />
              <div className="page-body__upcoming-games__list-item__name">Biomutant Steam Key ARABIC</div>
              <div className="page-body__upcoming-games__list-item__price">€54.49</div>
              <div className="page-body__upcoming-games__list-item__discount">
                <span className="page-body__upcoming-games__list-item__discount-price">€54.49</span>
                <span className="page-body__upcoming-games__list-item__discount-rate">34% OFF</span>
              </div>
              <Button variant="primary" className="page-body__upcoming-games__list-item__cta">
                Pre Order
              </Button>
            </div>
            <div className="page-body__upcoming-games__list-item">
              <img src={Wdl} alt="Watch Dogs: Legion Uplay Key" />
              <div className="page-body__upcoming-games__list-item__name">Watch Dogs: Legion Uplay Key</div>
              <div className="page-body__upcoming-games__list-item__price">€37.99</div>
              <div className="page-body__upcoming-games__list-item__discount">
                <span className="page-body__upcoming-games__list-item__discount-price">€37.99</span>
                <span className="page-body__upcoming-games__list-item__discount-rate">20% OFF</span>
              </div>
              <Button variant="primary" className="page-body__upcoming-games__list-item__cta">
                Pre Order
              </Button>
            </div>
            <div className="page-body__upcoming-games__list-item">
              <img src={Bld2} alt="Vampire: The Masquerade - Bloodlines 2 Steam Key" />
              <div className="page-body__upcoming-games__list-item__name">
                Vampire: The Masquerade - Bloodlines 2 Steam Key
              </div>
              <div className="page-body__upcoming-games__list-item__price">€4.36</div>
              <div className="page-body__upcoming-games__list-item__discount">
                <span className="page-body__upcoming-games__list-item__discount-price">€4.36</span>
                <span className="page-body__upcoming-games__list-item__discount-rate">15% OFF</span>
              </div>
              <Button variant="primary" className="page-body__upcoming-games__list-item__cta">
                Pre Order
              </Button>
            </div>
            <div className="page-body__upcoming-games__list-item">
              <img src={Fm21} alt="Football Manager 2021 Steam Key" />
              <div className="page-body__upcoming-games__list-item__name">Football Manager 2021 Steam Key</div>
              <div className="page-body__upcoming-games__list-item__price">€41.79</div>
              <div className="page-body__upcoming-games__list-item__discount">
                <span className="page-body__upcoming-games__list-item__discount-price">€41.79</span>
                <span className="page-body__upcoming-games__list-item__discount-rate">5% OFF</span>
              </div>
              <Button variant="primary" className="page-body__upcoming-games__list-item__cta">
                Pre Order
              </Button>
            </div>
          </div>
          <div className="page-body__upcoming-games__actions">
            <Button variant="outline-primary">Load More</Button>
          </div>
        </div>
      </Contained>
    </div>
  );
}
