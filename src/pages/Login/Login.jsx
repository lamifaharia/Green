const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center">Login</h2>

                    <input type="email" placeholder="email@gmail.com" className="input input-bordered" />

                    <input type="password" placeholder="Password" className="input input-bordered" />

                    <button className="btn btn-success">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;