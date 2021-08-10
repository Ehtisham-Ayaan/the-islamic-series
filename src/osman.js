
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from "react-router-dom";


import {makeStyles} from "@material-ui/core/styles";

import { useState, useEffect } from 'react';
import osmanI from "./img/krulus-osman.jpg"

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

export default function Osman() {

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
            <h2 className={myClass.h}>Watch Krulus Osman Here</h2>
            </div>
            <div className="row">
            <Link to="/season-1" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Season 1</h4>
                    </div>
                    </Link>
                    <Link to="/season-2" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Season 2</h4>
                    </div>
                    </Link>
                    <Link to="/osman-urdu" style={{textDecoration: 'none' }} >
            <div className="col-xs-4" style = {{padding : 15}}>
            
                    <h4 className={myClass.h}>Osman in Urdu</h4>
                    </div>
                    </Link>
                
            </div>

            

        </div>
    )
}