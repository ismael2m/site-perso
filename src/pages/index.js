import React from 'react';

// = Composants
import Home from '../components/Home';
import Projects from '../components/Projects';

// == Données au format JSON
import data from '../data/data.json';

// = SCSS
import './index.scss';


const Index = () => (
  <div className="app">
    <div className="app-content">
      <Home data={data.home} />
      <Projects data={data.projects} />
    </div>
  </div>
);

export default Index;
