import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from 'contexts/Authcontext'

export default function EventInfoCard(props) {

    const { isAuthenticated } = useAuthContext()


    const { title, creator, creatorInfo, imgSize, imgType, description } = props

    return (
        <div className='py-5 bg-info'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className='fw-bold mb-2'>Join Events</h3>
                        <div className="py-2">
                            <i className="fa-sharp fa-solid fa-star text-warning"></i>
                            <i className="fa-sharp fa-solid fa-star text-warning"></i>
                            <i className="fa-sharp fa-solid fa-star text-warning"></i>
                            <i className="fa-sharp fa-solid fa-star text-warning"></i>
                            <i className="fa-sharp fa-solid fa-star text-warning"></i>
                        </div>
                        <p>{title}</p>
                        <h5 className="fw-bold">{creator}</h5>
                        <p>{creatorInfo}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <img className='w-100 h-100' src={`https://source.unsplash.com/${imgSize}/?${imgType}`} alt="loading..." />
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <div className="card border-0 w-100 h-100">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Event</h5>
                                <p className="card-text">{description}</p>
                                {!isAuthenticated
                                    ? <Link to="/authentication/login" className="btn btn-primary text-white">Login</Link>
                                    : <>
                                        <Link to={"/"} className="btn btn-primary rounded-5 text-white w-75 mx-auto">Join Event</Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}