import logo from '../../assets/mercedes.png';
import asset1 from '../../assets/asset1.png';
import asset2 from '../../assets/asset2.png';
import asset3 from '../../assets/asset3.png';
import './Asset.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Asset() {
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
                <Link to="/assets" className="buttonSide active">
                    <FontAwesomeIcon icon="fa-file" />
                    <p>Assets</p>
                </Link>
                <Link to="/provider" className="buttonSide">
                    <FontAwesomeIcon icon="upload" />
                    <p>Provider Portal</p>
                </Link>
                <Link to="/consumer" className="buttonSide">
                    <FontAwesomeIcon icon="gear" />
                    <p>Consumer Portal</p>
                </Link>
                <Link to="/settings" className="buttonSide" id="settings">
                    <FontAwesomeIcon icon="download" />
                    <p>Settings</p>
                </Link>
                <Link to="/" className="buttonSide" id="logout">
                    <FontAwesomeIcon icon="user" />
                    <p>Logout</p>
                </Link>
            </div>
            <div className="header">
                <p>Mercedes-Benz Connected Simulation</p>
                <p>Assets</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="c-middle">
            <img src={asset1} alt="asset 1" id="img-asset"></img>
            <img src={asset2} alt="asset 2" id="img-asset"></img>
            <img src={asset3} alt="asset 3" id="img-asset"></img>
            </div>
        </div>
    );
}

export default Asset
