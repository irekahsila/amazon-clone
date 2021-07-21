import React, { useState }  from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = e => {
        // Prevent refreshing the page
        e.preventDefault();
        // Firebase stuff
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))



    }
    const register = e => {
        e.preventDefault();
        // Do Firebase register stuff
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // It successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            }).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className='login__logo' />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                    
                </form>
                <p>
                    By signing-in you agree to Amazon CLONE's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
