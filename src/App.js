import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./footer";
import TopMenu from "./nav";
import Home from "./home.jsx";
import about from "./About";

import uyanis from "./uyanis";
import USeason1 from "./uyanis/season1";

function App() {
  return (
    <>
      <Router>
        <div>
          <AnimatedCursor
            innerSize={10}
            outerSize={10}
            color="193, 11, 111"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />
          <ToastContainer />
          <TopMenu />
          <Switch>
            <Route path="/about" component={about} />
            <Route path="/uyanis" component={uyanis} />
            <Route path="/uyseason-1" component={USeason1} />
            <Route path="/" exact component={Home} />
            {/* <Redirect to="/notfound"/> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
