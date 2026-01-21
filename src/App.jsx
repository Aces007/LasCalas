import {BrowserRouter as Router} from 'react-router-dom'; // BrowserRouter is like using vanilla JS for single-page-nav
import NavHead from './reusables/NavHead.jsx';
import NavFoot from './reusables/NavFoot.jsx';
import RouteFlow from './RouteFlow.jsx';

import './index.css';
import './pages.css';


export default function App () {
  return (
    <Router>
      <NavHead />
      <RouteFlow />
      <NavFoot />
    </Router>
  );
};
