import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
    const navigate = useNavigate();


    const { registerUser } = useAuth;

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await registerUser( email, password );
        navigate("/");
    };

    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Register</h1>
                    <input type="email" placeholder="email@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="input input-bordered" onChange={(e)=>setPassword(e.target.value)} />
                    <button className="btn btn-success">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;