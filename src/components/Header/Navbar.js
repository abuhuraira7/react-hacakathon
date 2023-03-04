import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from 'config/firebase';
import { useAuthContext } from 'contexts/Authcontext';

export default function Navbar() {

    const { isAuthenticated, dispatch } = useAuthContext()

    const handleLogout = e => {
        signOut(auth)
            .then(() => {
                dispatch({ type: "LOGOUT" })
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <header>

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img className='rounded-3' width={30} height={30} src="assets/logo.png" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/event" className="nav-link">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {!isAuthenticated
                                ? <Link to="/authentication/login" className="btn btn-primary text-white">Login</Link>
                                : <>
                                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}