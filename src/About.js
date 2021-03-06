import { Typography } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import about from "./img/about1.jpg";

const useStyles = makeStyles((theme) => ({
  h: {
    marginTop: "20%",
    color: "green",
  },

  text: {
    fontSize: "15px",
    overflow: "visible",
    fontWeight: 800,
    fontStyle: "italic",
    fontFamily: `"Inter-ExtraBoldItalic", "Inter", sans-serif`,
    color: "#433E69",
    letterSpacing: 1,
    lineHeight: 1.5,
  },

  frame: {
    height: "auto",
    overflow: "visible",
    display: "block",
    marginTop: "10%",
    marginBottom: "10%",
  },

  frame2: {
    width: "85%",
    height: "auto",
    background:
      "radial-gradient(100% 50% at 0% 46.6%, #33aaff 0%, hsl(0, 0%, 66%) 100%)",
    overflow: "visible",
  },
}));

function getWindowDimensions() {
  const width = window.innerWidth;
  return width;
}

export default function About() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [fontSize, setFontSize] = useState(25);
  const [setWidthh] = useState(750);
  // useEffect(() => {
  //   setWindowDimensions(getWindowDimensions());

  //   if (windowDimensions < 1024) {
  //     setFontSize(12);
  //     setWidthh(280);
  //   }
  // });

  const myClass = useStyles();

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <img
            src={about}
            width="100%"
            height="auto"
            alt="about-img"
            style={{ marginTop: "10%" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" style={{ padding: 15 }}>
          <h4 className={myClass.h}>Who We Are</h4>
          <Typography className={myClass.text}>
            We are new in Software Industry and Build this app for the Users who
            feel problem while Taughting Holy Quran to their children. As I
            noticed that some of the people are getting very bad experience and
            not getting a true environment for their children, We brought up
            this plateform. We are practicing huge amount of hard work to bring
            you quality work, therefore, be patience and tell us if you feel any
            sort of inconvenience.
          </Typography>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <div className={myClass.frame}>
            <div style={{ marginLeft: "10%" }}>
              <div className={myClass.frame2}>
                <Typography
                  className={myClass.text}
                  style={{ fontSize: fontSize, marginLeft: "12%" }}
                >
                  Designed By: Rabbani Solutions Feel Free to Contact Us
                  erwattoo@gmail.com for any suggestions or Query{" "}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" style={{ padding: 15 }}>
          <h4 className={myClass.h}>Where to Find us</h4>
          <Typography className={myClass.text}>
            We are remote For Now... Only COntact Us By Email
          </Typography>
        </div>
      </div>
      <br />
    </div>
  );
}
