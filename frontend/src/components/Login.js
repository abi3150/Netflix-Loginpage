import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/netflix-logo.png";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const login = async () => {

        if (email === "" || password === "") {

            setMessage("Please fill all fields");

            return;

        }

        try {

            const res = await axios.post("http://localhost:5000/login", {

                email,
                password

            });

            setMessage(res.data.message);

            if (res.data.success) {

                navigate("/home");

            }

        }

        catch (err) {

            setMessage(err.response.data.message);

        }

    }

    return (

        <div className="page">

            <header>

                <img src={logo} alt="logo" />

            </header>

            <div className="loginBox">

                <h1>Enter your info to sign in</h1>

                <p className="subtitle">
                    Or get started with a new account.
                </p>

                <input
                    type="email"
                    placeholder="Email or mobile number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={login}>
                    Continue
                </button>

                <p className="error">{message}</p>

                <div className="help">

                    <h4>Get Help ▼</h4>

                    <a href="/">Forgot email or mobile number?</a>

                    <a href="/">Learn more about sign-in</a>

                </div>

                <p className="captcha">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </p>

            </div>

        </div>

    );

}

export default Login;