
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firbase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Logged in successfully with Google!");
                navigate(location.state?.from?.pathname || "/");
            })
            .catch((error) => {
                toast.error(`Google Login failed: ${error.message}`);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Login successful!");
                navigate(location.state?.from?.pathname || "/");
            })
            .catch((error) => {
                toast.error(`Login failed: ${error.message}`);
            });
    };

    const handlePasswordReset = () => {
        const email = prompt("Enter your email to reset password:");
        if (!email) {
            toast.warning("Email is required for password reset!");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!");
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card w-full max-w-lg p-10 shrink-0 border">
                <h2 className="text-2xl font-semibold text-center">Login to your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <button
                                type="button"
                                onClick={handlePasswordReset}
                                className="label-text-alt link link-hover text-blue-500"
                            >
                                Forgot password?
                            </button>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline btn-secondary flex items-center justify-center"
                    >
                        <FaGoogle className="mr-2" /> Login with Google
                    </button>
                </div>
                <p className="text-center font-semibold mt-4">
                    Don’t Have An Account?{" "}
                    <Link to="/auth/register" className="text-red-500 underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
