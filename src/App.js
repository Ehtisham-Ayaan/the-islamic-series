import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import AnimatedCursor from "react-animated-cursor"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Footer from "./footer"
import TopMenu from "./nav";
import Home from "./home.jsx";
import about from "./About";
import Osman from "./osman";
import oSeason1 from "./osman/season1"
import oSeason2 from "./osman/season2"
import osmanUrdu from "./osman/osmanUrdu"

import ertugral from "./ertugral"

import eSeason1 from "./ertugral/season1"
import eSeason2 from "./ertugral/season2"
import eSeason3 from "./ertugral/season3"
import eSeason4 from "./ertugral/season4"
import eSeason5 from "./ertugral/season5"


import eUSeason1 from "./ertugral/ertU1"
import eUSeason2 from "./ertugral/ertU2"
import eUSeason3 from "./ertugral/ertU3"
import eUSeason4 from "./ertugral/ertU4"
import eUSeason5 from "./ertugral/ertU5"

import uyanis from "./uyanis"
import USeason1 from './uyanis/season1';

function App() {
  return (
    <>
            <Router>
            <div>

                <AnimatedCursor  
                    innerSize={10}
                    outerSize={10}
                    color='193, 11, 111'
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}/>

                    <ToastContainer />
                    <TopMenu />
                    <Switch>
              

                        {/* <Route path="/dashboardA" component={dashboardA}></Route> */}
                        {/* <Route path="/dashboardB" component={dashboardB}></Route> */}

                        {/* <Route path="/payment" component={Payment}></Route> */}

                        {/* <Route path="/contact-us" component={contactus}  */}
                        {/* /> */}

                        {/* <Route path="/submitted" component={submitted}  */}
                        {/* /> */}
                        {/* <Route path="/notfound" component={notfound}/> */}
                        {/* <Route path="/login" component={login}  */}
                        {/* /> */}
                        {/* <Route path="/signup" component={signup}/> */}
                        {/* <Route path="/sketch" component={sketch}/> */}
                        <Route path="/about" component={about}/>

                        <Route path="/osman" component={Osman}/>
                        <Route path="/season-1" component={oSeason1}/>
                        <Route path="/season-2" component={oSeason2}/>
                        <Route path="/osman-urdu" component={osmanUrdu}/>


                        <Route path="/ertugral" component={ertugral}/>
                        <Route path="/eseason-1" component={eSeason1}/>
                        <Route path="/eseason-2" component={eSeason2}/>
                        <Route path="/eseason-3" component={eSeason3}/>
                        <Route path="/eseason-4" component={eSeason4}/>
                        <Route path="/eseason-5" component={eSeason5}/>

                        <Route path="/eUseason-1" component={eUSeason1}/>
                        <Route path="/eUseason-2" component={eUSeason2}/>
                        <Route path="/eUseason-3" component={eUSeason3}/>
                        <Route path="/eUseason-4" component={eUSeason4}/>
                        <Route path="/eUseason-5" component={eUSeason5}/>
                        
                        <Route path="/uyanis" component={uyanis}/>
                        <Route path="/uyseason-1" component={USeason1}/>

                        {/* <Route path="/addByAdmin" component={addByAdmin}/> */}
                        <Route path="/" exact component={Home}/>
                        {/* <Redirect to="/notfound"/> */}
                    </Switch>
                    <Footer/>
                </div>
            </Router>

        </>
    
  );
}

export default App;
