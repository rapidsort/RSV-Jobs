// eslint-disable-next-line
/* eslint-disable */
import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

import bannerImage from '../../images/background1.jpg'

class Banner extends React.Component {
    render(){

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems);
          });


        return (
            <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
              <div className="container">
                <br /><br />
                <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
                <div className="row center">
                  <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                </div>
                <div className="row center">
                  <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                </div>
                <br /><br />
        
              </div>
            </div>
            <div className="parallax"><img src={bannerImage} alt="Unsplashed background img 1" /></div>
          </div>
        );
    }
}

export default Banner;