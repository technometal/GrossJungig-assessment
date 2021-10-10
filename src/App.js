import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/navigation/navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Skills" component={Skills}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
