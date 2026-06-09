import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();

    const { loginUser, googleLogin } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        await loginUser( email, password );

        navigate ("/");
    };

    const handleGoogle = async () => {
        await googleLogin();
        navigate("/");
    };

    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <input type="email" placeholder="email@gmail.com" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} />
                    <button className="btn btn-success">Login</button>

                    <button type="button" onClick={handleGoogle} className="btn btn-outline"></button>
                    <p className="text-center"> No account? 
                        <Link className="text-success ml-2" to="/Register">
                        Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;