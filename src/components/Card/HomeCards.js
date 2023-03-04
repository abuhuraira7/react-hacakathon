import React from 'react'
import { Link } from 'react-router-dom'

export const HomeCard = ({ imgType, title, text }) => {

    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 bg-transparent mb-4 mb-lg-0 card-style">
                <img src={`https://source.unsplash.com/800x500/?${imgType}`} className="card-img-top" alt="loading ..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link to='/readEvent' className="btn btn-primary rounded-5 text-white">Read More</Link>
                </div>
            </div>
        </div>
    )
}