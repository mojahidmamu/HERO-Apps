    import React from "react";
    import { Link } from "react-router-dom";

    const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Oops! Page Not Found</p>

        <Link to="/">
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded">
            Go Home
            </button>
        </Link>
        </div>
    );
    };

    export default ErrorPage;