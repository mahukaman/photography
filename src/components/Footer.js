import React from 'react';

import config from '../../config';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        <div>
          <section>
            <h2>More about me</h2>
            <p>
              Taking pictures across Japan with my trusty Sony a6400.
              <br />This is a site dedicated to showcasing my portfolio to become an artist on Displate.
            </p>
          </section>

        </div>
        <div>
        <section>
          <h2>Follow me on ...</h2>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <hr />
        <section>
          <p>Created by Mahukaman, © 2020</p>
        </section>
        </div>
      </div>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
