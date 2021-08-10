
import 'bootstrap/dist/css/bootstrap.min.css';

import {makeStyles} from "@material-ui/core/styles";

import { useState, useEffect } from 'react';


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

export default function Season1() {

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

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 18 Part 1</h3>

        <iframe title = "u1" width="560" height="315" src="//ok.ru/videoembed/1687372434171" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 18 Part 2</h3>

        <iframe title="u1" width="560" height="315" src="//ok.ru/videoembed/1688573905659" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        </div>

    )
}