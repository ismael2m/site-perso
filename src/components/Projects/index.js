import React from 'react';
import { Link } from 'gatsby';

import AOS from 'aos';
import 'aos/dist/aos.css';

// = SCSS
import './projects.scss';


// == Images
import site from '../../../static/img/site.jpg';
import gamebook from '../../../static/img/gamebook.jpg';
import salarify from '../../../static/img/salarify.jpg';
import randomJla from '../../../static/img/jla.jpg';
import wavlive from '../../../static/img/wavlive.jpg';

// == Fonction qui garde uniquement le nom dans le chemin des images
import cutImgPath from '../../functions/cutImgPath';

AOS.init();

const Projects = ({ data }) => {
  const {
    section, list,
  } = data;
  return (
    <div
      className="projects"
      id="projects"
      data-aos="fade"
      data-aos-duration="1200"
    >
      <h2 className="projects-title">
        {section}
      </h2>
      <div className="projects-list">
        {
          list.map((item) => {
            const array = [site, gamebook, salarify, randomJla, wavlive];

            return (
              <>
                <Link to={`/${cutImgPath(array[item.id])}`} className="projects-list-item">
                  <img src={array[item.id]} alt="" className="img" />
                  <p className="projects-list-item-title">{item.title}</p>
                  <p className="projects-list-item-subtitle">{item.subtitle}</p>
                </Link>
              </>
            );
          })
        }

      </div>
    </div>
  );
};

export default Projects;
