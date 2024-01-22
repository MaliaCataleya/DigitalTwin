import logo from '../../assets/mercedes.png';
import './CPortal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from "react-router-dom";

function CPortal() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/addC";
        navigate(path);
    }

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
                <Link to="/consumer" className="buttonSide active">
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
                <p>Consumer Portal</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="c-middle">
                <p id="table-head">Current Contracts</p>
                <span class="c-bar"></span>
                <div id="set-buttons">
                    <button className="set" id="filter">Filter<FontAwesomeIcon icon="filter" /></button>
                    <button className="set" id="add" onClick={routeChange}><FontAwesomeIcon icon="plus" /></button>
                    <button className="set"><FontAwesomeIcon icon="fa-magnifying-glass" /></button>
                </div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>UID</th>
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Cost/ Size</th>
                    </tr>
                    <tr>
                        <td>Bosch</td>
                        <td>AS12AH3G</td>
                        <td>Car_123</td>
                        <td>2 Years</td>
                        <td>17.01.2024</td>
                        <td className="edit"> <p>100€/ 1GB</p> <FontAwesomeIcon icon="fa-pen-to-square" /></td>
                    </tr>
                    <tr>
                        <td>ZF</td>
                        <td>AS12AH3H</td>
                        <td>Van_235</td>
                        <td>1 Year 6 Months</td>
                        <td>10.01.2023</td>
                        <td className="edit"> <p>10€/ 1GB</p> <FontAwesomeIcon icon="fa-pen-to-square" /></td>
                    </tr>
                    <tr>
                        <td>Mercedes-Benz</td>
                        <td>AS13AH32</td>
                        <td>PKW_45</td>
                        <td>1 Year</td>
                        <td>20.02.2023</td>
                        <td className="edit"> <p>1K€/ 1GB</p> <FontAwesomeIcon icon="fa-pen-to-square" /></td>
                    </tr>
                    <tr>
                        <td>SSC</td>
                        <td>AS153512</td>
                        <td>Otto_engine</td>
                        <td>3 Years</td>
                        <td>01.01.2024</td>
                        <td className="edit"> <p>25€/ 1GB</p> <FontAwesomeIcon icon="fa-pen-to-square" /></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default CPortal
