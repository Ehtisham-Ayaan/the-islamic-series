import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from '../img/about.jpg'
import {makeStyles} from "@material-ui/core/styles";
import home1 from '../img/home1.png'
import about111 from '../img/about111.jpeg'
import about222 from '../img/about222.jpg'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

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

export default function USeason1() {

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

        <iframe width="560" height="315" src="//ok.ru/videoembed/2666400058107" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 18 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2649805359740" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>

        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 17 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2571652369058" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 17 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2658519485179" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 16 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2558849125026" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 16 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2564058385058" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 15 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2538517891746" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 15 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2626557446907" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 14 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2525024946850" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 14 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2531083881122" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 13 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2519360670370" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 13 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2600409828091" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 12 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2509969951394" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 12 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2590512319227" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 11 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2533791894267" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 11 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2555963968251" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 10 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2448603351676" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 10 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2448508258871" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 9 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2408967375484" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>  
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 9 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2385754720823" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 8 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2398028172027" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 8 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2395136985724" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 7 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2356537789052" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 7 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2295738272418" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 6 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2356486212347" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 6 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2327664069175" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 5 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2325391215228" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 5 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2262085667490" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 4 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2304990513915" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 4 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2277305748023" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 3 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2243227748919" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 3 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2223459928738" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 2 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2184908835452" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 2 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2194981063292" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        <div className="row">

        <div className="col-md-6">
        <h3 className={myClass.h}>Episode 1 Part 1</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2042728549115" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div><div className="col-md-6">
        <h3 className={myClass.h}>Episode 1 Part 2</h3>

        <iframe width="560" height="315" src="//ok.ru/videoembed/2030123158178" frameborder="0" allow="autoplay" allowfullscreen = "true"></iframe>
        </div>
        
        </div>
        </div>

    )
}