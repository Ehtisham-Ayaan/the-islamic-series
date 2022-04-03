import { Link } from "react-router-dom";

import "./css/footer.css";
import "./css/Button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";
import ScrollToTop from "react-scroll-up";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {"Copyright © "}
      <Link color="inherit" to="#">
        Rabbani Solutions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <footer id="dk-footer" class="dk-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-4" style={{ marginTop: "15%" }}>
            <div class="dk-footer-box-info">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png"
                  alt="footer_logo"
                  class="img-fluid"
                />
              </Link>
              <p class="footer-info-text">
                We are here for you 24/7 , 24 hours and 7 days a week. We will
                be glad to know from you about our product. Simply give us your
                feed back.
              </p>
              <div class="footer-social-link">
                <h3 style={{ textDecoration: "underline" }}>Connect</h3>
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: 24, margin: 10, color: "#3B5998" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: 24, margin: 10, color: "#55ACEE" }}
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ fontSize: 24, margin: 10, color: "#B7242A" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer-awarad">
              <p>Rabbani Solutions</p>
            </div>
          </div>

          <div class="col-md-12 col-lg-8" style={{ marginTop: "10%" }}>
            <div class="row">
              <div class="col-md-8">
                <div class="contact-us">
                  <div class="contact-icon">
                    <FontAwesomeIcon icon={faMap} />
                  </div>

                  <div class="contact-info">
                    <h3>Rabbani Solutions</h3>
                    <p>Islamic Society</p>
                  </div>
                </div>
              </div>

              {/* <div class="col-md-6">
                            <div class="contact-us contact-us-last">
                                <div class="contact-icon">                                   
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                            
                                <div class="contact-info">
                                    <h3>95 711 9 5353</h3>
                                    <p>Give us a call</p>
                                </div>
                                
                            </div>
                        
                        </div> */}
            </div>

            <div class="row">
              <div class="col-md-12 col-lg-6">
                <div class="footer-widget footer-left-widget">
                  <div class="section-heading">
                    <h3>Useful Links</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <Link to="/about" style={{ textDecoration: "none" }}>
                        About us
                      </Link>
                    </li>
                  </ul>
                  <ul></ul>
                </div>
              </div>

              <div class="col-md-12 col-lg-6">
                <div class="footer-widget">
                  <div class="section-heading">
                    <h3>Subscribe</h3>
                    <span class="animate-border border-black"></span>
                  </div>
                  <p>
                    We are offering features which will be valuable to you. Just
                    Support Us By Subscribing us which will be available soon.
                    Just Stay Tuned 💕💕.
                  </p>

                  <div class="form-row">
                    <div class="col dk-footer-form">
                      <Link to="#" style={{ textDecoration: "none" }}>
                        <button class="glow-on-hover">Subscribe</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span>
                <Copyright />
              </span>
            </div>

            <div class="col-md-6">
              <div class="copyright-menu">
                <ul>
                  <li>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop showUnder={200}>
        <div id="back-to-top" class="back-to-top">
          <button
            class="btn btn-dark"
            title="Back to Top"
            style={{ display: "block" }}
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        </div>
      </ScrollToTop>
    </footer>
  );
}

export default Footer;
