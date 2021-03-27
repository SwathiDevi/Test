import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './pages/Form'
import WeatherApp from './pages/WeatherApp'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/weather-app">WeatherApp</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/weather-app">
            <WeatherApp />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
