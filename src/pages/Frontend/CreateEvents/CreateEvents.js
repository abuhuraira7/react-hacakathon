import React, { useState } from 'react'
import { setDoc, serverTimestamp, doc } from 'firebase/firestore/lite'
import { firestore } from 'config/firebase'
import { useAuthContext } from 'contexts/Authcontext'

const initialState = {
  name: "",
  dateTime: "",
  title: "",
  location: "",
  description: ""
}

export default function CreateEvents() {

  const { user } = useAuthContext()

  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => {
    let { name, value } = e.target
    setState(s => ({ ...s, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault();

    let { name, dateTime, title, location, description } = state

    dateTime = dateTime.toString()
    name = name.trim()
    title = title.trim()
    location = location.trim()
    description = description.trim()

    if (name.length < 3) {
      return window.notify("name length should be at least 3 chars", "error")
    }
    if (title.length < 3) {
      return window.notify("Title length should be at least 3 chars", "error")
    }
    if (location.length < 3) {
      return window.notify("Please enter location", "error")
    }
    if (description.length < 10) {
      return window.notify("Please enter description", "error")
    }

    let formData = { name, dateTime, title, location, description }

    formData.dateCreated = serverTimestamp();
    formData.id = window.getRandomId();
    formData.status = "active";
    formData.attendees = [user.email];
    formData.createdBy = {
      email: user.email,
      uid: user.uid
    }
    createDocument(formData);
  }

  const createDocument = async (formData) => {
    setIsProcessing(true)
    try {
      await setDoc(doc(firestore, "events", formData.id), formData);
      window.notify("Event has been successfully added", "success");
    } catch (err) {
      console.error(err)
      window.notify("Something went wrong, Event is'nt added. ***Login!", "error")
    }
    setIsProcessing(false)
  }

  return (
    <div className="py-5 d-flex justify-content-center align-items-center createEvent">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <h2 className='text-center mb-4'>Create Event</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" className='form-control' name="name" placeholder='Enter your name' onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <input type="datetime-local" className='form-control' name="dateTime" onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" className='form-control' name="title" placeholder='Enter Tittle' onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" className='form-control' name="location" placeholder='Enter Location' onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <textarea name="description" className='form-control' rows="5" placeholder='Enter Description' onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <button className='btn btn-primary text-white w-75 rounded-5' disabled={isProcessing}>
                      {!isProcessing
                        ? "Add Event"
                        : <div className="spinner-grow spinner-grow-sm"></div>
                      }
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}