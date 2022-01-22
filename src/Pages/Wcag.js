import React from 'react';
import Wrapper from './Wrapper'
import '../styles/main.css';
import wcag from '../images/wcag.png';
function Info() {
    return (
        <Wrapper>
            <div className="row" >
                <div className="col-3">
                    <p className="w3tytul" id="target-one">WCAG </p>
                </div>

                <div className="col-6">
                    <p className="w3" id="target-one">
                        <a href="https://www.nvaccess.org/download/?fbclid=IwAR3QxjylHRkDdRCAoS4u2ezIyVdTfNYRD6kMc0G9EVeLOaSmZ9DXYufjrbQ">  <img src={wcag} alt="link do oprogramowania wcag" /></a>
                        <figcaption>Link do pobrania oprogramowania czytającego strone dla niewidomych</figcaption>
                    </p>
                </div>

            </div>
        </Wrapper >
    )
}
export default Info;