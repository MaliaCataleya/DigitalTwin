import logo from '../../assets/mercedes.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="site">
            <div id="sidebar">
                <Link to="/login/home" className="buttonSide active">
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
                <p>Asset and Contract Administration</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="middle">
                <Link to="/dashboard" className="button"><span>Dashboard</span></Link>
                <Link to="/assets" className="button"><span>Assets</span></Link>
                <Link to="/provider" className="button"><span>Provider Portal</span></Link>
                <Link to="/consumer" className="button"><span>Consumer Portal</span></Link>
            </div>
        </div>
    );
}

export default Home;
