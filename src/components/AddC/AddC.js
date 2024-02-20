import logo from '../../assets/mercedes.png';
import './AddC.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

var response;

const fetchCatalog = () => {
    fetch('http://127.0.0.1:5000/edc/consumer')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    const outputC = document.getElementById("outputC");
    loopPolling(outputC, "c");
}

async function loopPolling(elem, url) {
    var apiEnd = "http://127.0.0.1:5000/subscribe/" + url;
    response = await fetch(apiEnd);
    let text = await response.text();
    // Experimental: Replace the initial lines containing the path and all that wonky stuff
    text = text.replaceAll(/^[\s\S]*?(?=(INFO|DEBUG|WARNING|SEVERE))/gm, "")
    // Simple regex to:
    // 1. Add linebreak in form of <br> in front of log levels
    // 2. Color the log Levels
    // This introduces the "issue" of the first line being empty due to a starting <br>
    // However this seemed more readable to me so I left it in
    elem.innerHTML = text
        .replaceAll(/\ *?INFO\ */gm, "<br /><a style='color:green'>INFO</a> ")
        .replaceAll(/\ *?WARNING\ */gm, "<br /><a style='color:orange'>WARNING</a> ")
        .replaceAll(/\ *?DEBUG\ */gm, "<br /><a style='color:purple'>DEBUG</a>  ")
        .replaceAll(/\ *?SEVERE\ */gm, "<br /><a style='color:red'>SEVERE</a>  ")
    setTimeout(function () { loopPolling(elem, url) }, 2000);
}

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
                <p>Consume new Asset</p>
            </div>
            <img src={logo} className="logo" alt="logo" />
            <div className="middle">
                <button onClick={fetchCatalog}>Fetch Catalog!</button>
                <div id="outputC" className="output multiline">Output Consumer</div>
            </div>
        </div>
    );
}

export default Add
