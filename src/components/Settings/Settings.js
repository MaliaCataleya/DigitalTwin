import logo from '../../assets/mercedes.png';
import './Settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Settings() {
    return (
        <div className="site">
            <div id="sidebar">
                <Link to="/login/home" className="buttonSide">
                    <FontAwesomeIcon icon="gear" />
                    <p>Home</p>
                </Link>
                <Link to="/dashboard" className="buttonSide">
                    <FontAwesomeIcon icon="gear" />
                    <p>Dashboard</p>
                </Link>
                <Link to="/assets" className="buttonSide">
                    <FontAwesomeIcon icon="gear" />
                    <p>Assets</p>
                </Link>
                <Link to="/provider" className="buttonSide">
                    <FontAwesomeIcon icon="gear" />
                    <p>Provider Portal</p>
                </Link>
                <Link to="/consumer" className="buttonSide">
                    <FontAwesomeIcon icon="gear" />
                    <p>Consumer Portal</p>
                </Link>
                <Link to="/settings" className="buttonSide" id="settings">
                    <FontAwesomeIcon icon="gear" />
                    <p>Settings</p>
                </Link>
                <Link to="/" className="buttonSide" id="logout">
                    <FontAwesomeIcon icon="gear" />
                    <p>Logout</p>
                </Link>
            </div>
            <div className="header">
                <p>Mercedes-Benz Metaverse</p>
                <p>Settings</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="middle">
            </div>
        </div>
    );
}

export default Settings
