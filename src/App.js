import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import Home from "./components/Home";
import FooterComponent from "./components/FooterComponent";

// non-stateless:durumsuz yani bir yere değer döndermeyen:void
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className="container">
          <Switch>
          <Route path="/" exact component={Home}></Route>
            <Route path="/kredibasvurusu"  component={CreateUserComponent}></Route>
            
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
