import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from 'contexts/Authcontext'

export default function Hero() {

  const { isAuthenticated } = useAuthContext()

  return (
    <div className='py-5 bg-info'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0 ">
            <div className="card border-0 w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="card-body">
                <h3 className="card-title fw-bold">Events</h3>
                <p className="card-text">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur ad eos aperiam? Culpa cumque atque fugiat assumenda aspernatur!</p>
                {!isAuthenticated
                  ? <Link to="/authentication/login" className="btn btn-primary text-white">Login</Link>
                  : <>
                    <Link to={"/"} className="btn btn-primary rounded-5 mb-1 mb-sm-0 me-2 text-white">Join Event</Link>
                    <Link to="/event" className="btn btn-primary rounded-5 mb-1 mb-sm-0 text-white">Create Event</Link>
                  </>
                }
              </div>
            </div>
          </div>

          <div className="col-12 col-md-8">
            <img style={{ width: "100%", height: "100%" }} src="assets/bg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
