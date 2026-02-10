import { Link } from "react-router-dom";
import "../Styles/ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-text">
                The page you are looking for does not exist or has been moved.
            </p>

            <Link to="/" className="error-btn">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;