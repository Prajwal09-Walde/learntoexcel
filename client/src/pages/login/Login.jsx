import { useState } from "react";
import './login.css';
import Header from "../../components/header/Header";

const Login = () => {
    const [details, setDetails] = useState({
        email: '',
        password: '',
    })

    const onLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Header/>
            <h1>Login</h1>
            <div className="lContainer">
              <form onSubmit={onLogin}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="email"
                  value={details.email}
                  onChange={(e) => setDetails({...details, email: e.target.value})}
                />
                <br/>
                <label>Password</label>
                <input
                  type="text"
                  placeholder="password"
                  value={details.password}
                  onChange={(e) => setDetails({...details, pasword: e.target.value})}
                />
                <br/>
                <button className="lButton" type="submit">Login</button>
              </form>
            </div>
        </div>
    );
}

export default Login;
