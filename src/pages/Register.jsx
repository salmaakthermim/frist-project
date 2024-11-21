
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            return "Password must include an uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must include a lowercase letter.";
        }
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        const error = validatePassword(password);
        if (error) {
            setPasswordError(error);
            return;
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Set user profile (optional)
                result.user.displayName = name;
                result.user.photoURL = photo;

                toast.success("Registration successful!");
                navigate('/'); // Navigate to Home page
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                toast.success("Google Login successful!");
                navigate('/'); 
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <div className="min-h-screen mb-10 flex justify-center items-center">
                <div className="card w-full max-w-lg p-10 shrink-0 border">
                    <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="photo url"
                                name="photo"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered w-full pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={handleTogglePassword}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary">
                            Sign in with Google
                        </button>
                    </div>
                    <p className="text-center font-semibold mt-4">
                        Already Have An Account?{" "}
                        <Link to="/auth/login" className="text-red-500 underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;


