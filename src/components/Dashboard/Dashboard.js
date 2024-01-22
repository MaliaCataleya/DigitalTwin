import logo from '../../assets/mercedes.png';
import dashboard from '../../assets/dashboard.png';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="site">
            <div id="sidebar">
                <Link to="/login/home" className="buttonSide">
                    <FontAwesomeIcon icon="house" />
                    <p>Home</p>
                </Link>
                <Link to="/dashboard" className="buttonSide active">
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
                <p>Dashboard</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="c-middle">
                <img src={dashboard} alt="dashboard" id="dashboard"></img>
            </div>
        </div>
    );
}

export default Dashboard
