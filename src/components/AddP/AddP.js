import logo from '../../assets/mercedes.png';
import './AddP.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Add() {
    return (
        <div className="site">
            <div id="sidebar">
                <Link to="/login/home" className="buttonSide">
                    <FontAwesomeIcon icon="house" />
                    <p>Home</p>
                </Link>
                <Link to="/dashboard" className="buttonSide">
                    <FontAwesomeIcon icon="fa-chart-line" />
                    <p>Dashboard</p>
                </Link>
                <Link to="/assets" className="buttonSide">
                    <FontAwesomeIcon icon="fa-file" />
                    <p>Assets</p>
                </Link>
                <Link to="/provider" className="buttonSide active">
                    <FontAwesomeIcon icon="upload" />
                    <p>Provider Portal</p>
                </Link>
                <Link to="/consumer" className="buttonSide">
                    <FontAwesomeIcon icon="download" />
                    <p>Consumer Portal</p>
                </Link>
                <Link to="/settings" className="buttonSide" id="settings">
                    <FontAwesomeIcon icon="gear" />
                    <p>Settings</p>
                </Link>
                <Link to="/" className="buttonSide" id="logout">
                    <FontAwesomeIcon icon="user" />
                    <p>Logout</p>
                </Link>
            </div>
            <div className="header">
                <p>Mercedes-Benz Connected Simulation</p>
                <p>Provide new Asset</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="middle">
                <div>
                    <p id="fetching">Fetching available Assets from Localhost</p>
                    <div class="l-1 letter">L</div>
                    <div class="l-2 letter">o</div>
                    <div class="l-3 letter">a</div>
                    <div class="l-4 letter">d</div>
                    <div class="l-5 letter">i</div>
                    <div class="l-6 letter">n</div>
                    <div class="l-7 letter">g</div>
                    <div class="l-8 letter">.</div>
                    <div class="l-9 letter">.</div>
                    <div class="l-10 letter">.</div>
                </div>
            </div>
        </div>
    );
}

export default Add
