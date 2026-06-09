import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex justify-center mt-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return children;
};

export default PrivateRoute;