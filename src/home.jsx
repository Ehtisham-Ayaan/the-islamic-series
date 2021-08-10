import './css/App.css';
import {makeStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import front from './img/front.jpg';

import home1 from "./img/home1-removebg-preview (2).png";

import home2 from "./img/home2-removebg-preview (2).png";

import home3 from "./img/home3-removebg.png";
// import home4 from "./img/home4.jpg";
// import home4 from "./img/home4-removebg.png";
// import home4 from "./img/home4-removebg-preview.png";

import home4 from "./img/home44.png";

import home5 from "./img/home5.png";
import coffee from "./img/coffee.jpg"
import lightening from "./img/lightening.png";

import React, { useEffect } from 'react';
// import { Spin } from 'antd';
// import { check } from 'antd';
// import 'antd/dist/antd.css';

import {Button, IconButton} from "@material-ui/core";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// import MyEstimates from "./sketch";
import logo from "./img/logoA.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from "@material-ui/core/Typography";
// import { FaBeer } from 'react-icons/fa';
import { LogoNodejs } from 'react-ionicons'
import { Heart } from 'react-ionicons'  
import { Close } from 'react-ionicons'  

import { toast } from "react-toastify";

import mySketch from "./img/krulus-osman.jpg"
import ertugral from "./img/ertugral.png"
import uyanis from "./img/Uyanis.jpg"

const useStyles = makeStyles((theme) => ({
    p: {
            overflow: "visible",
            letterSpacing: 0.5,
            color: "#433E69",
            fontSize: '20px',
            fontWeight: 700,
            fontStyle: "italic",
            fontFamily: `"Inter-ExtraBoldItalic", "Inter", sans-serif`,
            lineHeight: 2,
            textAlign: "center",
            top: '20%' ,
            height: 'auto',
            width : '100%'
            
        },
    frame : {
        width: '100%',
        height: 'auto',
    },

    textframe:{
    width: '100%',
  height: 'auto',
  overflow: "hidden",
//   transform: "translate('-50%' , -'50%' )" ,
  background: "radial-gradient(92.10000000000001% 50% at 5.2% 52.7%, #2266ff 0%, hsl(222, 57%, 77%) 100%)",
borderRadius: "5%",   

},

frame1 : {

    width: '100%',
    height: 'auto',
    overflow: 'visible',
    background: "radial-gradient(100% 50% at 0% 50%, #593b3b 0%, hsla(0, 71%, 76%, 0.66) 100%)",

},

liText : {

    width: '100%',
    height: 'auto',
    overflow: 'visible',
    color: 'white',
    textAlign: 'left',
    lineHeight: '2.3',
    fontWeight: '700',
    fontStyle: 'italic',
    fontFamily: "Inter-Bold" || "Inter" || "sans-serif",
    fontSize: '14.3px',
    letterSpacing: '0px',
},

    myStyle : {
        position: 'absolute',
        top: '20%' ,
        left: '35%' ,
        transform: "translate('-50%' , -'50%' )" ,
        width: '30%',
        height: 'auto',
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

  const classes = useStyles();

    const [password, setPassword] = React.useState("");

    const [myData, setMyData] = React.useState([]);



    const width = '100%';
    const height = 'auto';

    const myClass = useStyles();

    return (
<div style={{overflow : 'hidden'}}>
<img width = {width} height = {height}
                     src = {front}
                     alt="image" 
                     style = {{  opacity:0.8 , borderBottomRightRadius : '20%' }}
                     
                     />
                     

                     <img src = {logo} className={myClass.myStyle}/>

<div style={{paddingLeft : "10px" , paddingRight : "10px" }}>
<div className="container">
<div className="row">
<div className="col-md-4">

<Link to="/osman" style={{textDecoration: 'none' }} >
                            
<Card className={classes.root} style = {{marginTop : "14%" , marginBottom : "10%"}} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {mySketch}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textTransform: "uppercase"}}>
          Krulus Osman
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Click To watch Series
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      
      </CardActions> */}
    </Card>
    </Link>

    </div>
    
    <div className="col-md-4">

<Link to="/ertugral" style={{textDecoration: 'none' }} >
                            
<Card className={classes.root} style = {{marginTop : "14%" , marginBottom : "10%"}} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {ertugral}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textTransform: "uppercase"}}>
          Drillis Ertugral
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Click To watch Series
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      
      </CardActions> */}
    </Card>
    </Link>

    </div>
    
    <div className="col-md-4">

<Link to="/uyanis" style={{textDecoration: 'none' }} >
                            
<Card className={classes.root} style = {{marginTop : "14%" , marginBottom : "10%"}} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image = {uyanis}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textTransform: "uppercase"}}>
          Uyanis: Büyük Selcuklu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Click To watch Series
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      
      </CardActions> */}
    </Card>
    </Link>

    </div></div>
<div className="row">

  <h3 className="blink_me" style={{marginTop:"5%" , marginBottom: "5%"}}> Be connected for BARBAROSA </h3>

    </div>
</div>

</div>
</div>




    )
}
export default Home;
