    import React from "react";
    import { Link } from "react-router-dom";
    import ErrorImage from "../../assets/image/error-404.png"

    const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
            <img src={ErrorImage} alt="Error 404" />
            <h1 className="text-6xl font-bold text-red-500">Oops! Page Not Found</h1>
            
            <Link to="/">
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded">
                    Go Home
                </button>
            </Link>
        </div>
    );
    };

    export default ErrorPage;