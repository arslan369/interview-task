import React from 'react';
import loginImg from './icon-1.png';

const Login = (props) => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <img className="icon-img" src={loginImg}/>
                <label> Email </label>
                <input 
                type="text" 
                placeholder="Email"
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                />
                <p className="errorMsg">{emailError}</p>

                <label> Password </label>
                <input 
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)} 
                />
                <p className="errorMsg"> {passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button 
                        onClick={handleLogin}>
                            Sign In
                            </button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign Up Now</span></p>
                        </>
                    ) : (
                        <>
                        <button 
                        onClick={handleSignup}>
                            Sign Up
                            </button>
                        <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In.</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
};

export default Login;