import logo from '../../assets/mercedes.png';
import './Settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Settings() {
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
                <Link to="/provider" className="buttonSide">
                    <FontAwesomeIcon icon="upload" />
                    <p>Provider Portal</p>
                </Link>
                <Link to="/consumer" className="buttonSide">
                    <FontAwesomeIcon icon="download" />
                    <p>Consumer Portal</p>
                </Link>
                <Link to="/settings" className="buttonSide active" id="settings">
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
                <p>Settings</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="middle">
                <div class="group">
                    <input type="text" required></input>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Port Consumer</label>
                </div>
                <div class="group">
                    <input type="text" required></input>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Port Provider</label>
                </div>
                <div class="group">
                    <input type="text" required></input>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Port Frontend</label>
                </div>
                <button className="s-button"><span>Save</span></button>
            </div>
        </div>
    );
}

export default Settings
