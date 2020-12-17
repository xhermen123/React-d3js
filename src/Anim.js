import React from 'react';
import logo from './logo.svg';
import { TweenMax, TimelineMax, TweenLite, Power2 } from 'gsap';

class Anim extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // TweenMax.to(this.line1, 4, {morphSVG: {shape:this.diag1, shapeIndex:[0]}, ease:Expo.easeOut});

        var svg1 = document.querySelector('#c3rWAXwFR');
        var svg2 = document.querySelector('#c1YvHYYALi');
        var svg3 = document.querySelector('#a26B0WCij');
        var svg4 = document.querySelector('#cwNCmH7Es');
        var svg5 = document.querySelector('#a7YSOe3Z0U');
        var text = document.querySelector('#quotes');
        var svgT = document.querySelector('#svg');
        var num1 = document.querySelector('#num1');
        var num2 = document.querySelector('#num2');
        var lines = document.querySelector('#lines');
        var tl = new TimelineMax({repeat:0, yoyo:false});

        //create a timeline with 2 tweens that draw 2 separate strokes
        tl.add(this.createLineTween(svg1))
        .add(this.createLineTween(svg2), "=-1.8")
        .add(this.createLineTween(svg3), "=-1.8")
        .add(this.createLineTween(svg4), "=-1.8")
        .add(this.createLineTween(svg5, 2), "=-1.8")
        // .add(TweenLite.to(svg5  , 2, {strokeOpacity: 1}), 8)
        .add(TweenLite.to(num1  , 0.5, {opacity: 1}), 2)
        .add(TweenLite.to(num2  , 0.5, {opacity: 1}), 2)
        .add(TweenLite.to(lines  , 0.5, {transform: 'translateY(-200px)'}), 1.8)
        .add(this.createTextTween(text, 2));
        // .add(TweenLite.to(text  , 0.5, {width: '500px', opacity: 1}), 2.5);
    }

    // , ease:Power2.easeInOut
    //this function creates a single tween that animates the stroke of an svg
    createLineTween(svg, time = null) { 
        var pathObject = {pathLength:svg.getTotalLength(), length:0}; 
        if(time) {
            var tween = TweenLite.from(pathObject, 2, {length:pathObject.pathLength, onUpdate:this.drawLine, onUpdateParams:[pathObject, svg], immediateRender:true}, time);
        } else {
            var tween = TweenLite.from(pathObject, 2, {length:pathObject.pathLength, onUpdate:this.drawLine, onUpdateParams:[pathObject, svg], immediateRender:true});
        }
        return tween;
    }

    createTextTween(text, time = null) {
        var textObject = {text: 0}
        var tween = TweenLite.to(textObject, 0.5, {text: 130, onUpdate:this.drawText, onUpdateParams:[textObject, text], immediateRender:true, ease:Power2.easeInOut}, time);
        return tween;
    }

    drawLine(obj, svg) {
        svg.style.strokeDasharray = [obj.pathLength - obj.length, obj.pathLength].join(' ');
    }

    drawText(obj, text) {
        var str = 'SPEED STRIPES';

        text.textContent = str.substring(0, Math.floor(obj.text / 10));
    }

    render () {
        return (
            <div className="anim-component">
                <div className="svg-wrapper">
                    <svg id="svg" className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="270 0 100 430" width="640" height="400">
                        <g id="lines">
                            <path d="M150 400L150 0Z" id="c3rWAXwFR" opacity="1" fillOpacity="0" stroke="#ff0000" strokeWidth="20" strokeOpacity="1"></path>
                            <path d="M320 400L320 0Z" id="c1YvHYYALi" opacity="1" fillOpacity="0" stroke="#ff0000" strokeWidth="20" strokeOpacity="1"></path>
                            <path d="M490 400L490 0Z" id="a26B0WCij" opacity="1" fillOpacity="0" stroke="#ff0000" strokeWidth="20" strokeOpacity="1"></path>
                            <path d="M-2.99 257.31C15.41 256.22 31.51 255.26 26.91 255.53C202.72 245.07 355.73 144.99 433.68 -7.79C433.86 -8.14 434.3 -9.01 435.01 -10.4" id="cwNCmH7Es"  opacity="1" fillOpacity="0" stroke="#ff0003" strokeWidth="20" strokeOpacity="1"></path>
                            <path d="M0 400L640 400Z" id="a7YSOe3Z0U" opacity="1" fillOpacity="0" stroke="#ff0002" strokeWidth="20" strokeOpacity="1"></path>
                            <text id="num1" x="215" y="350" fill="white" fontSize="70px" fontWeight="bold" opacity="0">1</text>
                            <text id="num2" x="385" y="350" fill="white" fontSize="70px" fontWeight="bold" opacity="0">2</text>
                        </g>
                        <text id="quotes" x="140" y="350" fill="black" fontSize="70px" fontWeight="bold" opacity="1"></text>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Anim;
