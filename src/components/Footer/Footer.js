import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-4 mt-auto bg-dark text-white">
            <div className="container">
                <div className="row px-4">
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <img className='rounded-3' height={40} width={40} src="assets/logo.png" alt="logo" />
                        </div>
                        <p className="mt-2">Plan and book your perfect trip with expert advice, travel tips
                            for information Contact us...</p>
                        <p className="paragraphs1 mt-4">&copy;{year} Billionairo Guys. <br /> All rights reserved.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div className="mb-4 fw-bold">Destinations</div>
                        <p className="mb-1">Asia</p>
                        <p className="mb-1">Europe</p>
                        <p className="mb-1">America</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5 mb-md-0">
                        <div className="mb-4 fw-bold">Pages</div>
                        <p className='mb-0'><Link to={"/"} className="text-white">Home</Link></p>
                        <p><Link to={"/event"} className="text-white">Create Event</Link></p>
                        <p><Link to={"/readEvent"} className="text-white">Read Events</Link></p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="mb-4 fw-bold">Authentication</div>
                        <p className='mb-0'><Link to="/authentication/login" className="text-white">Login</Link></p>
                        <p><Link to="/authentication/register" className="text-white">Register</Link></p>
                        <p><Link to="/authentication/forgot-password" className="text-white">Forgot Password</Link></p>
                    </div>
                </div>

                <hr className="my-3" />
                <div className="row">
                    <div className="col-md-6 mb-2 mb-md-0 ms-sm-4 ms-md-0">
                        <a href="tel:03076290920" className="text-decoration-none text-white"><i className="fa-brands fa-whatsapp fa-lg text-success me-1"></i>
                            0307629020
                        </a>
                    </div>
                    <div className="col-md-6 text-md-end ms-sm-4 ms-md-0">
                        <a href="email:m.abuhuraira@outlook" className="text-decoration-none text-white"><i className="fa-regular fa-envelope text-success me-1"></i>
                            m.abuhuraira@outlook
                        </a>
                    </div>
                </div>
                <hr className="my-3" />

                <div className="row bg-info border rounded-3 mx-1">
                    <div className="col d-flex justify-content-center align-items-center py-3">
                        <i className="fa-brands fa-twitter fa-lg me-3 text-dark"></i>
                        <i className="fa-brands fa-facebook-f fa-lg me-3 text-primary"></i>
                        <i className="fa-brands fa-instagram fa-lg me-3 text-danger"></i>
                        <i className="fa-brands fa-linkedin-in fa-lg me-3 text-primary"></i>
                        <i className="fa-brands fa-youtube fa-lg me-3 text-danger"></i>
                    </div>
                </div>
            </div>
        </footer >
    )
}