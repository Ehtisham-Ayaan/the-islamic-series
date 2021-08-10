
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


import {makeStyles} from "@material-ui/core/styles";

import { useState, useEffect } from 'react';
import osmanI from "./img/ertugral.png"

const useStyles = makeStyles((theme) => ({
 
    h:{
        marginTop : '20%', 
        color: "green"
    },

    text : {
           fontSize : '15px',
           overflow: "visible",
           fontWeight: 800,
           fontStyle: "italic",
           fontFamily: `"Inter-ExtraBoldItalic", "Inter", sans-serif`,
           color: "#433E69",
           letterSpacing: 1,
           lineHeight: 1.5,
    },

    frame : {
        height: "auto",
        overflow: "visible",
        display: 'block',
        marginTop : '10%',
        marginBottom: '10%',
      },

      frame2 : {
        width: "85%",
        height: 'auto',
        background: "radial-gradient(100% 50% at 0% 46.6%, #33aaff 0%, hsl(0, 0%, 66%) 100%)",
        overflow: "visible",
      }

}));

function getWindowDimensions() {
    const width = window.innerWidth;
    return width
    
  }

export default function Ert() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [fontSize, setFontSize] = useState(25);
    const [widthh , setWidthh] = useState(750);
useEffect(() => {

    setWindowDimensions(getWindowDimensions());

    if(windowDimensions < 1024){ 
        setFontSize(12);
        setWidthh(280);
    }
})
    
    const myClass = useStyles();

    return(

        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <img src={osmanI} width = '100%' height = 'auto' style = {{marginTop: '10%'}}/>
                </div>
            </div>
            <div className="row">
            <h2 className={myClass.h}>Watch Drillis Ertugral Here</h2>
            </div>
            <div className="row">
            <Link to="/eseason-1" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Season 1</h4>
                    </div>
                    </Link>
                    <Link to="/eseason-2" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Season 2</h4>
                    </div>
                    </Link>
                    <Link to="/eseason-3" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Season 3</h4>
                    </div>
                    </Link>
                    <Link to="/eseason-4" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Season 4</h4>
                    </div>
                    </Link>
                    <Link to="/eseason-5" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Season 5</h4>
                    </div>
                    </Link>
                    </div><div className="row">
                    <Link to="/eUseason-1" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Ertugral in Urdu Season1</h4>
                    </div>
                    </Link>
                    <Link to="/eUseason-2" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Ertugral in Urdu Season2</h4>
                    </div>
                    </Link>
                    <Link to="/eUseason-3" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Ertugral in Urdu Season3</h4>
                    </div>
                    </Link>
                    <Link to="/eUseason-4" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Ertugral in Urdu Season4</h4>
                    </div>
                    </Link>
                    <Link to="/eUseason-5" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Ertugral in Urdu Season5</h4>
                    </div>
                    </Link>
                
            </div>

            

        </div>
    )
}