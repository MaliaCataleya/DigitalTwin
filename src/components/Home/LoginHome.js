import logo from '../../assets/mercedes.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div id="site">
            <div id="sidebar">
                <div id="pages">
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
                </div>
                <div id="other">
                    <Link to="/settings" className="buttonSide" id="settings">
                        <FontAwesomeIcon icon="gear" />
                        <p>Settings</p>
                    </Link>
                    <Link to="/" className="buttonSide" id="logout">
                        <FontAwesomeIcon icon="gear" />
                        <p>Logout</p>
                    </Link>
                </div>
            </div>
            <div id="content">
                <div id="header">
                    <div id="headline-wrap">
                        <div id="headline">
                            <p>Mercedes-Benz Metaverse</p>
                            <p>Asset and Contract Administration</p>
                        </div>
                    </div>
                    <img src={logo} id="logo" alt="logo" />
                </div>
                <div id="middle">
                    <Link to="/dashboard" className="button"><span>Dashboard</span></Link>
                    <Link to="/assets" className="button"><span>Assets</span></Link>
                    <Link to="/provider" className="button"><span>Provider Portal</span></Link>
                    <Link to="/consumer" className="button"><span>Consumer Portal</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
