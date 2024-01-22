import logo from '../../assets/mercedes.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="site">
      <div id="sidebar">
        <Link to="login" className="buttonSide">
          <FontAwesomeIcon icon="user" />
          <p>Login</p>
        </Link>
      </div>
      <div className="header">
        <p>Mercedes-Benz Connected Simulation</p>
        <p>Asset and Contract Administration</p>
      </div>
      <img src={logo} className="logo" alt="logo" />
      <div className="middle">
        <Link to="login" className="button"><span>Dashboard</span></Link>
        <Link to="login" className="button"><span>Assets</span></Link>
        <Link to="login" className="button"><span>Provider Portal</span></Link>
        <Link to="login" className="button"><span>Consumer Portal</span></Link>
      </div>
    </div>
  );
}

export default Home;
