import React, { createContext, useState } from 'react'


export const AuthContext = createContext();

export function getCurrentUserInfo() {
    return fetch('/current_user_info')
    .then((res) => {
        if(!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    })
}




function AuthProvider(props) {
    const [user, setUser] = useState(null);

    function login(username, password) {
        return fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setUser(data.user);

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function signup(formData, history) {
        return fetch('/signup', {
            method: 'POST',
            body: formData,
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setUser(data.user);
            history.push('/login');
        })
        .catch((error) => {
            console.error('Error:', error)
        });
    }

    function logout() {
        return fetch('/logout', { method: 'POST' })
        .then(() => {
            setUser(null);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function isAuthenticated() {
        return user !== null;
      }

    const value = { user, login, signup, logout, getCurrentUserInfo, isAuthenticated };

    return <AuthContext.Provider value={value} {...props} />;
}

export default AuthProvider;