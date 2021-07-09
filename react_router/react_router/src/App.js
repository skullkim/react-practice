import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About'
import Profiles from './Profiles';

function App() {
  return (
      <div>
          <ul>
              <li><Link to={"/"}>home</Link></li>
              <li><Link to={"/about"}>about</Link></li>
              <li><Link to={"/profiles"}>profile</Link></li>
          </ul>
          <div>
              <Route path={"/"} component={Home} exact={true}/>
              <Route path={["/about", "/info"]} component={About}/>
              <Route path={"/profiles"} component={Profiles}/>
          </div>
      </div>
  );
}

export default App;
