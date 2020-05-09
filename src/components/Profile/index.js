/* eslint-disable react/no-danger */
import React from 'react';

// == Composants
import Head from '../Head';
import AbFooter from '../AbFooter';

// == SCSS
import './profile.scss';

// == DOM purify: nettoyer le html pour éviter les soucis de failles XSS
import dangerHtml from '../../functions/dangerHtml';


const Profile = ({
  path, title, name, html,
}) => (
  <>
    <Head title={path} />
    <div className="profile">
      <div className="profile-group">
        <div className="profile-group-infos">
          <h1 className="profile-group-infos-title">
            {title}
            {' '}
            <span className="profile-group-infos-title-span">{name}</span>
          </h1>
          <div dangerouslySetInnerHTML={dangerHtml(html)} className="profile-group-infos-content" />
        </div>
      </div>
      <div className="profile-buttons">
        <a href="https://drive.google.com/open?id=1EDa7ecJB5yNvlqc2vcyO_znLGPIvywVC" target="_blank" rel="noopener noreferrer">
          <button type="button" className="profile-buttons-btn">
            Télécharger mon CV
          </button>
        </a>

        <a href="mailto:ismael2m.pro@gmail.com">
          <button type="button" className="profile-buttons-btn">
            Contactez-moi
          </button>
        </a>
      </div>
      <AbFooter />

    </div>
  </>
);
export default Profile;
