import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path = '/:name'>
              <CountryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
