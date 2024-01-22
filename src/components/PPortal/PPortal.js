import logo from '../../assets/mercedes.png';
import './PPortal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function PPortal() {
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
                <p>Provider Portal</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="c-middle">
                <p id="table-head">Current Contracts</p>
                <span class="c-bar"></span>
                <div id="set-buttons">
                    <button className="set" id="filter">Filter<FontAwesomeIcon icon="gear" /></button>
                    <button className="set" id="add"><FontAwesomeIcon icon="gear" /></button>
                    <button className="set"><FontAwesomeIcon icon="gear" /></button>
                </div>
                <table>
                    <tr>
                        <th>UID</th>
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Cost/ Size</th>
                    </tr>
                    <tr>
                        <td>AS12AH3G</td>
                        <td>Car_123</td>
                        <td>2 Years</td>
                        <td>17.01.2024</td>
                        <td className="edit"> <p>100€/ 1GB</p> <FontAwesomeIcon icon="gear" /></td>
                    </tr>
                    <tr>
                        <td>AS12AH3H</td>
                        <td>Van_235</td>
                        <td>1 Year 6 Months</td>
                        <td>10.01.2023</td>
                        <td className="edit"> <p>10€/ 1GB</p> <FontAwesomeIcon icon="gear" /></td>
                    </tr>
                    <tr>
                        <td>AS13AH32</td>
                        <td>PKW_45</td>
                        <td>1 Year</td>
                        <td>20.02.2023</td>
                        <td className="edit"> <p>1K€/ 1GB</p> <FontAwesomeIcon icon="gear" /></td>
                    </tr>
                    <tr>
                        <td>AS153512</td>
                        <td>Otto_engine</td>
                        <td>3 Years</td>
                        <td>01.01.2024</td>
                        <td className="edit"> <p>25€/ 1GB</p> <FontAwesomeIcon icon="gear" /></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default PPortal
