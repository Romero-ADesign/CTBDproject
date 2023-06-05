import React, { useState, useContext } from 'react';
import { AuthContext } from './Auth';

function Signup() {
    const { signup } = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [error, setError] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    
    function handleProfilePictureChange(event) {
        setProfilePicture(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('email', email);
        if (profilePicture) {
            formData.append('profile_picture', profilePicture);
        }

        signup(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Profile Picture:
                <input type="text" onChange={handleProfilePictureChange} />
            </label>
            <button type="submit">Sign Up</button>
            {error && <div>{error}</div>}
        </form>
    )
    
}

export default Signup