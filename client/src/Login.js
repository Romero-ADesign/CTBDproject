import { useState, useContext } from "react";
import { withRouter } from 'react-router-dom'
import { AuthContext } from "./Auth";

function Login(props) {
    const { login } = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(username, password);
        props.history.push('/home')
    }

    return (
        <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default withRouter(Login)