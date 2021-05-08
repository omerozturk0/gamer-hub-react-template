import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faRetweet, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Contained from '../../../_utils/contained/contained';
import Post1 from '../../../../images/posts/post1.png';
import Post2 from '../../../../images/posts/post2.png';
import Post3 from '../../../../images/posts/post3.png';
import ProLabel from '../../../../images/icons/pro-label.png';
import Channel1 from '../../../../images/channels/channel1.png';
import Channel2 from '../../../../images/channels/channel2.png';
import Channel3 from '../../../../images/channels/channel3.png';
import Channel4 from '../../../../images/channels/channel4.png';

export default function gamesHub() {
  return (
    <div className="page-body__games-hub">
      <Contained>
        <div className="page-body__section__heading">
          <div className="page-body__section__heading__text">Games Hub</div>
          <div className="page-body__section__heading__text page-body__section__heading__text--small">
            The best offers, new games, AAA titles and high-quality video games..
          </div>
          <button type="button" className="theme-btn">
            Discover All
          </button>
        </div>
        <div className="page-body__games-hub__content">
          <div className="page-body__games-hub__content__col page-body__games-hub__content__col--latest-posts">
            <div className="page-body__games-hub__content__heading">Latest posts</div>
            <div className="page-body__games-hub__content__body">
              <div className="page-body__games-hub__content__post">
                <div className="page-body__games-hub__content__post__top">
                  <img src={Post1} alt="Post Image" className="page-body__games-hub__content__post__image" />
                  <div className="page-body__games-hub__content__post__info">
                    <div className="page-body__games-hub__content__post__user-credential-info">
                      <span className="page-body__games-hub__content__post__user-name">MrPaladin</span>
                    </div>
                    <div className="page-body__games-hub__content__post__user-nick-followers">
                      <span className="page-body__games-hub__content__post__user-nick">@mrpaladin</span>
                      <span className="page-body__games-hub__content__post__user-followers">15 Followers</span>
                    </div>
                  </div>
                  <div className="page-body__games-hub__content__post__date">3hrs ago</div>
                </div>
                <div className="page-body__games-hub__content__post__middle">
                  Sniper isnt overpowered. Sniper has some of the lowest damage outputs in the game. 50 damage per shot
                  is terrible, especially with the fire rate. Compared to heavy, who has 400+ DPS!..
                  <a href="#">Read More</a>
                </div>
                <div className="page-body__games-hub__content__post__bottom">
                  <div className="page-body__games-hub__content__post__actions">
                    <button type="button">
                      <FontAwesomeIcon icon={faRetweet} />
                    </button>
                    <button type="button">
                      <FontAwesomeIcon icon={faShare} />
                    </button>
                    <button type="button" className="voted">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                    <span>296</span>
                  </div>
                  <div className="page-body__games-hub__content__post__comments">
                    <span>15 Comments</span>
                    <FontAwesomeIcon icon={faCommentAlt} />
                  </div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <div className="page-body__games-hub__content__post__top">
                  <img src={Post2} alt="Post Image" className="page-body__games-hub__content__post__image" />
                  <div className="page-body__games-hub__content__post__info">
                    <div className="page-body__games-hub__content__post__user-credential-info">
                      <span className="page-body__games-hub__content__post__user-name">LeroyJenkins</span>
                      <img
                        src={ProLabel}
                        alt="Pro Label"
                        className="page-body__games-hub__content__post__user-status"
                      />
                    </div>
                    <div className="page-body__games-hub__content__post__user-nick-followers">
                      <span className="page-body__games-hub__content__post__user-nick">@leroyjenkins</span>
                      <span className="page-body__games-hub__content__post__user-followers">3253 Followers</span>
                    </div>
                  </div>
                  <div className="page-body__games-hub__content__post__date">15mins ago</div>
                </div>
                <div className="page-body__games-hub__content__post__middle">
                  It&apos;ll still be long enough that it cannot be spammed. But will increase usefulness of the watch
                  by not..
                </div>
                <div className="page-body__games-hub__content__post__bottom">
                  <div className="page-body__games-hub__content__post__actions">
                    <button type="button">
                      <FontAwesomeIcon icon={faRetweet} />
                    </button>
                    <button type="button">
                      <FontAwesomeIcon icon={faShare} />
                    </button>
                    <button type="button">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                    <span>296</span>
                  </div>
                  <div className="page-body__games-hub__content__post__comments">
                    <span>15 Comments</span>
                    <FontAwesomeIcon icon={faCommentAlt} />
                  </div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <div className="page-body__games-hub__content__post__top">
                  <img src={Post3} alt="Post Image" className="page-body__games-hub__content__post__image" />
                  <div className="page-body__games-hub__content__post__info">
                    <div className="page-body__games-hub__content__post__user-credential-info">
                      <span className="page-body__games-hub__content__post__user-name">ONYXSnake1223</span>
                      <img
                        src={ProLabel}
                        alt="Pro Label"
                        className="page-body__games-hub__content__post__user-status"
                      />
                    </div>
                    <div className="page-body__games-hub__content__post__user-nick-followers">
                      <span className="page-body__games-hub__content__post__user-nick">@ONYXSnake1223</span>
                      <span className="page-body__games-hub__content__post__user-followers">125 Followers</span>
                    </div>
                  </div>
                  <div className="page-body__games-hub__content__post__date">15mins ago</div>
                </div>
                <div className="page-body__games-hub__content__post__middle">
                  If you&apos;ve not yet played CS:GO, do yourself a favor and play first. Excellent game, and this one
                  ties in heavily with the story from the last..
                </div>
                <div className="page-body__games-hub__content__post__bottom">
                  <div className="page-body__games-hub__content__post__actions">
                    <button type="button">
                      <FontAwesomeIcon icon={faRetweet} />
                    </button>
                    <button type="button">
                      <FontAwesomeIcon icon={faShare} />
                    </button>
                    <button type="button">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                    <span>296</span>
                  </div>
                  <div className="page-body__games-hub__content__post__comments">
                    <span>156 Comments</span>
                    <FontAwesomeIcon icon={faCommentAlt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-body__games-hub__content__col page-body__games-hub__content__col--channels">
            <div className="page-body__games-hub__content__heading">Channels</div>
            <div className="page-body__games-hub__content__body">
              <div className="page-body__games-hub__content__post">
                <img src={Channel1} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#social Hub</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel2} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#Fornite</div>
                  <div className="page-body__games-hub__content__post__list-followers">240K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel3} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#World of War Craft</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel4} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#PUBG Mobile</div>
                  <div className="page-body__games-hub__content__post__list-followers">220K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel1} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#social Hub</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel2} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#Fornite</div>
                  <div className="page-body__games-hub__content__post__list-followers">240K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel3} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#World of War Craft</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel4} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#PUBG Mobile</div>
                  <div className="page-body__games-hub__content__post__list-followers">220K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel1} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#social Hub</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <button type="button" className="theme-btn">
                Find more
              </button>
            </div>
          </div>
          <div className="page-body__games-hub__content__col page-body__games-hub__content__col--suggestions">
            <div className="page-body__games-hub__content__heading">Who to follow?</div>
            <div className="page-body__games-hub__content__body">
              <div className="page-body__games-hub__content__post">
                <img src={Channel1} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#social Hub</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel2} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#Fornite</div>
                  <div className="page-body__games-hub__content__post__list-followers">240K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel3} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#World of War Craft</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel4} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#PUBG Mobile</div>
                  <div className="page-body__games-hub__content__post__list-followers">220K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel1} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#social Hub</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel2} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#Fornite</div>
                  <div className="page-body__games-hub__content__post__list-followers">240K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel3} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#World of War Craft</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel4} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#PUBG Mobile</div>
                  <div className="page-body__games-hub__content__post__list-followers">220K Users</div>
                </div>
              </div>
              <div className="page-body__games-hub__content__post">
                <img src={Channel1} alt="Channel" className="page-body__games-hub__content__post__image" />
                <div className="page-body__games-hub__content__post__list-info">
                  <div className="page-body__games-hub__content__post__list-heading">#social Hub</div>
                  <div className="page-body__games-hub__content__post__list-followers">195K Users</div>
                </div>
              </div>
              <button type="button" className="theme-btn">
                Find more
              </button>
            </div>
          </div>
        </div>
      </Contained>
    </div>
  );
}
