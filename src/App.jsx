import {BrowserRouter as Router} from 'react-router-dom'; // BrowserRouter is like using vanilla JS for single-page-nav

import NavFoot from './reusables/NavFoot.jsx';
import RouteFlow from './RouteFlow.jsx';

import './index.css';
import './pages.css';


export default function App () {
  return (
    <Router>
      <RouteFlow />
      <NavFoot />
    </Router>
  );
};
