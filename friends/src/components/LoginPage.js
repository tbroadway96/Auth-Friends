import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState()

    const history = useHistory()

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submitted');
        setIsLoading(true);
        axios
            .post('http://localhost:5000/api/login', {
                username: username,
                password: password
            })
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload)
                history.push('/friends-list')
            })
            .catch(err => console.error(err))
        setUsername('');
        setPassword('');
        setIsLoading(false);
    }

    return (
        <div className='loginPage'>
            <h1>Auth Friends</h1>
            <h4>Login below:</h4>
                <form onSubmit={onSubmit}>
                    <label>Username: </label>
                    <input 
                        type='text' 
                        name='userName'
                        value={username}
                        onChange={handleUserNameChange} 
                    />
                    <span style={{margin: '5px'}} />
                    <label>Password: </label>
                    <input 
                        type='text'
                        name='passWord'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                        <button type='submit'>
                            Login
                        </button>
                </form>
        </div>
    )
}

export default LoginPage;
