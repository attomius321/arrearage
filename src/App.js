
import ArrearageNavbar from './components/ArrearageNavbar/ArrearageNavbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home'
import Features from './pages/Features/Features'

function App() {
  return (
    <div>
      <ArrearageNavbar></ArrearageNavbar>
      <Router>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/features">
            <Features/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  
  );
}

export default App;
