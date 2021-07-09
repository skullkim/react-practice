import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About'
import Profile from './Profile';

function App() {
  return (
      <div>
          <ul>
              <li><Link to={"/"}>home</Link></li>
              <li><Link to={"/about"}>about</Link></li>
              <li><Link to={"/info"}>info</Link></li>
              <li><Link to={"/profile/velopert"}>velopert profile</Link></li>
              <li><Link to={"/profile/iskull"}>iskull profile</Link></li>
              <li><Link to={"/profile/1"}> profile</Link></li>
          </ul>
          <div>
              <Route path={"/"} component={Home} exact={true}/>
              <Route path={["/about", "/info"]} component={About}/>
              <Route path={"/profile/:username"} component={Profile}/>
          </div>
      </div>
  );
}

export default App;
