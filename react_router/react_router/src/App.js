import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About'
import Profiles from './Profiles';
import HistorySample from "./HistorySample"

function App() {
  return (
      <div>
          <ul>
              <li><Link to={"/"}>home</Link></li>
              <li><Link to={"/about"}>about</Link></li>
              <li><Link to={"/profiles"}>profile</Link></li>
              <li><Link to={"/history"}>History example</Link></li>
          </ul>
          <div>
              <Route path={"/"} component={Home} exact={true}/>
              <Route path={["/about", "/info"]} component={About}/>
              <Route path={"/profiles"} component={Profiles}/>
              <Route path={"/history"} component={HistorySample}/>
          </div>
      </div>
  );
}

export default App;
