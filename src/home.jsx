import "./css/App.css";
import { makeStyles } from "@material-ui/core/styles";
import front from "./img/front.jpg";

import React from "react";

import { Link } from "react-router-dom";

import logo from "./img/logoA.png";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  p: {
    overflow: "visible",
    letterSpacing: 0.5,
    color: "#433E69",
    fontSize: "20px",
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
    width: "100%",
    height: "auto",
    overflow: "visible",
    color: "white",
    textAlign: "left",
    lineHeight: "2.3",
    fontWeight: "700",
    fontStyle: "italic",
    fontFamily: "Inter-Bold" || "Inter" || "sans-serif",
    fontSize: "14.3px",
    letterSpacing: "0px",
  },

  myStyle: {
    position: "absolute",
    top: "20%",
    left: "35%",
    transform: "translate('-50%' , -'50%' )",
    width: "30%",
    height: "auto",
  },
  media: {
    height: 200,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  const width = "100%";
  const height = "auto";

  const myClass = useStyles();

  return (
    <div style={{ overflow: "hidden" }}>
      <img
        width={width}
        height={height}
        src={front}
        alt="image"
        style={{ opacity: 0.8, borderBottomRightRadius: "20%" }}
      />

      <img src={logo} className={myClass.myStyle} />
    </div>
  );
}
export default Home;
