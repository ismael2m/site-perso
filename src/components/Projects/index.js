import React from 'react';
import { Link } from 'gatsby';

// == PropTypes
import PropTypes from 'prop-types';

// = SCSS
import './projects.scss';

// == Images
import yuup from '../../../static/img/yuup.jpg';
import gamebook from '../../../static/img/gamebook.jpg';
import salarify from '../../../static/img/salarify.jpg';
import randomJla from '../../../static/img/jla.jpg';
import wavlive from '../../../static/img/wavlive.jpg';

// == Fonction qui garde uniquement le nom dans le chemin des images
import cutImgPath from '../../functions/cutImgPath';

const Projects = ({ data }) => {
  const { list } = data;

  return (
    <div className="projects" id="projects">
      <div className="projects-list">
        {
          list.map((item) => {
            const array = [yuup, gamebook, salarify, randomJla, wavlive];
            return (
              <>
                <Link to={`/${cutImgPath(array[item.id])}`} className="projects-list-item">
                  <img src={array[item.id]} alt={item.title} className="img" />
                  <div className="projects-list-item-filter" />
                  <p className="projects-list-item-title">{item.title}</p>
                </Link>
              </>
            );
          })
        }
      </div>
    </div>
  );
};

// == PropTypes
Projects.propTypes = {
  data: PropTypes.shape(
    {
      list: PropTypes.array.isRequired,
    },
  ).isRequired,
};

export default Projects;
