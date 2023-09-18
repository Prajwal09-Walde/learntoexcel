import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      const rs = await fetch('', {
        method: 'POST',
        headers: {
            'Accepted': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      })
       if (rs.ok) {
        const data = await rs.json();
        const {role, token} = data;

        localStorage.setItem('authToken', token);

        if (role === 'admin') {
            window.location.href = '/adminDashboard'
        }
        else if (role === 'user') {
            window.location.href = '/userDashboard'
        }else {
            console.error('Authentication failed')
        }
       };

       
    }
    return (
        <div className='login'>
           <div className='loginContainer'>
            <form>
                <input
                    type='text'
                    placeholder='enter yor email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </form> 
           </div>
        </div>
    );
}

export default Login;
