import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./img/logoA.png";
import ramadan from "./img/Ramadan-1.jpg";
import ramadan2 from "./img/Ramadan-2.jpg";
import quran from "./img/Quran1200.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Card, Button } from "react-bootstrap";
import AOS from "aos";
import ReactAudioPlayer from "react-audio-player";
import namesofAllah from "./assets/99.ogg";
import "aos/dist/aos.css";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles((theme) => ({
  body: {
    width: "90%",
    marginLeft: "3%",
  },
  p: {
    overflow: "visible",
    letterSpacing: 0.5,
    color: "#433E69",
    fontSize: "14px",
    fontWeight: 700,
    fontStyle: "italic",
    fontFamily: `"Inter-ExtraBoldItalic", "Inter", sans-serif`,
    lineHeight: 2,
    textAlign: "center",
    top: "20%",
    height: "auto",
    width: "100%",
  },
  frame: {
    width: "100%",
    height: "auto",
  },

  textframe: {
    width: "100%",
    height: "auto",
    overflow: "hidden",
    //   transform: "translate('-50%' , -'50%' )" ,
    background:
      "radial-gradient(92.10000000000001% 50% at 5.2% 52.7%, #2266ff 0%, hsl(222, 57%, 77%) 100%)",
    borderRadius: "5%",
  },

  frame1: {
    width: "100%",
    height: "auto",
    overflow: "visible",
    background:
      "radial-gradient(100% 50% at 0% 50%, #593b3b 0%, hsla(0, 71%, 76%, 0.66) 100%)",
  },

  liText: {
    marginLeft: "4%",
    width: "100%",
    height: "auto",
    overflow: "visible",
    color: "#3D0000",
    textAlign: "left",
    lineHeight: "2.3",
    fontWeight: "700",
    fontStyle: "italic",
    fontFamily: "Inter-Bold" || "Inter" || "sans-serif",
    fontSize: "24.3px",
    letterSpacing: "0px",
    display: "inline-block",
  },

  myStyle: {
    marginLeft: "3%",
    transform: "translate('-50%' , -'50%' )",
    width: "10%",
    height: "auto",
  },
  myRadio: {
    float: "right",
    marginTop: "2%",
  },
  imgStyle: {
    height: 200,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    color: "white",
    paddingRight: "1rem",

    textDecoration: "none",
    marginTop: ".5rem",
    fontFamily: "ubuntu",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Home() {
  const width = document.innerWidth;
  const height = "auto";
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const myClass = useStyles();

  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <img src={logo} className={myClass.myStyle} />
        <ReactAudioPlayer
          src={namesofAllah}
          autoPlay
          controls
          loop
          className={myClass.myRadio}
        />
      </div>
      <Carousel>
        <div>
          <img
            width={width}
            height={height}
            src={ramadan2}
            alt="image"
            style={{ opacity: 0.8, borderBottomRightRadius: "20%" }}
          />
          <p className="legend">Ramadan Mubarak</p>
        </div>
        <div>
          <img
            width={width}
            height={height}
            src={ramadan}
            alt="image"
            style={{ opacity: 0.8, borderBottomRightRadius: "20%" }}
          />
          <p className="legend">Ramadan Mubarak</p>
        </div>
      </Carousel>
      <div>
        <h3 className={myClass.liText}>Services</h3>
        <div data-aos="fade-up-right">
          <Card style={{ width: "18rem" }} className={myClass.liText}>
            <Card.Img variant="top" src={quran} />
            <Card.Body>
              <Card.Title>Quran Tutor</Card.Title>
              <Card.Text className={myClass.p}>
                We are Offering a group of Quran Tutors for children to learn
                How to recite Holy Quran?
              </Card.Text>
              <Button variant="danger">
                Visit Tutors <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className={myClass.liText}>
            <Card.Img variant="top" src={quran} />
            <Card.Body>
              <Card.Title>Recite Quran</Card.Title>
              <Card.Text className={myClass.p}>
                This is the month of Quran. So why not Quran? Just press button
                below to recite Holy Quran
              </Card.Text>
              <Button variant="danger">
                <Link
                  to={{ pathname: "https://quran.com" }}
                  target="_blank"
                  className={myClass.link}
                >
                  Recite <i class="fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className={myClass.liText}>
            <Card.Img variant="top" src={quran} />
            <Card.Body>
              <Card.Title>Quran Tutor</Card.Title>
              <Card.Text className={myClass.p}>
                We are Offering a group of Quran Tutors for children to learn
                How to recite Holy Quran?
              </Card.Text>
              <Button variant="danger">
                Visit Tutors <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className={myClass.liText}>
            <Card.Img variant="top" src={quran} />
            <Card.Body>
              <Card.Title>Khutba</Card.Title>
              <Card.Text className={myClass.p}>
                Are you willing to listen khutba jumma tul Mubarak from Hafiz
                Abdul Hanan or others why not?
              </Card.Text>
              <Button variant="danger">
                Listen Khutba <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Home;
