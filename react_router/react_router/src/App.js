import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
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
          <Switch>
              <Route path={"/"} component={Home} exact={true}/>
              <Route path={["/about", "/info"]} component={About}/>
              <Route path={"/profiles"} component={Profiles}/>
              <Route path={"/history"} component={HistorySample}/>
              {/*path를 따로 정의하지 않으면 모든 상황에 렌더링 된다*/}
              <Route
                  render={({location}) => (
                      <div>
                          <h2>Page not found</h2>
                          <p>{location.pathname}</p>
                      </div>
                  )}
              />
          </Switch>
      </div>
  );
}

export default App;
