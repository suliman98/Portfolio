import React, {Component} from 'react';

import './BottomNavigation.css';
import {footer} from 'react-bootstrap';
import Style from './assets/style.css';
class BottomNavigation extends Component {
    render() {
        return (
            <footer class="page-footer">
                <div className="container contact">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 contact-left justify-content-center align-items-center">
                            <address>
                                <h1 id="contact-left-heading">Get In Touch</h1>
                                Dubai, United Arab Emirates<br />
                                <abbr title="Phone">P:</abbr> <strong>(+971) 561134771</strong>
                            </address>

                            <address className="mb-2">
                                <strong>Suliman Noor Mohammad</strong><br />
                                <a href="mailto:#">suliman.nm98@gmail.com</a>
                            </address>
                        </div>
                        <div className="col-sm-12 col-md-6 contact-right justify-content-center align-self-center">
                            <div className="col-sm-12 col-md-12 mb-4 text-center">
                                <a href="/contact" className="btn primary-btn text-uppercase">Message Me</a>
                            </div>
                            <div className="col-sm-12 col-md-12 social-links text-center">
                                {/* <a href='https://twitter.com/Suliman_Guzran' target="_blank" className="fa fa-twitter" rel= "noopener noreferrer"></a>
                                <a href="https://www.linkedin.com/in/suliman-noor/" target="_blank" rel= "noopener noreferrer" className="fa fa-linkedin"></a>
                                <a href="https://www.instagram.com/suliman.guzran/" target="_blank" rel= "noopener noreferrer" className="fa fa-instagram"></a>	
                                <a href="suliman.nm98@gmail.com" target="_blank" className="fa fa-skype"></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default BottomNavigation;