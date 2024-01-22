import logo from '../../assets/mercedes.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="site">
      <div id="sidebar">
        <Link to="login" className="buttonSide">
          <FontAwesomeIcon icon="user" />
          <p>Login</p>
        </Link>
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
        <div className="middle">
          <Link to="login" className="button"><span>Dashboard</span></Link>
          <Link to="login" className="button"><span>Assets</span></Link>
          <Link to="login" className="button"><span>Provider Portal</span></Link>
          <Link to="login" className="button"><span>Consumer Portal</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
