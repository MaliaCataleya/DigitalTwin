import logo from '../../assets/mercedes.png';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-site">
      <div className="login-header">
        <p>Mercedes-Benz Connected Simulation</p>
        <p>Login</p>
      </div>
      <img src={logo} className="logo" alt="logo" />
      <div className="middle">
        <div class="group">
          <input type="text" required></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>BPN</label>
        </div>
        <div class="group">
          <input type="text" required></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>User</label>
        </div>
        <div class="group">
          <input type="password" required></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>
        <Link to="/login/home" className="s-button">Submit</Link>
      </div>
    </div>
  );
}

export default Login;
