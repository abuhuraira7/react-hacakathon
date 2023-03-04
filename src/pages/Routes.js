import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "contexts/Authcontext";


import Authentication from "./Authentication"
import Frontend from "./Frontend"

export default function Index() {

const {isAuthenticated} = useAuthContext()

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Frontend />} />
          <Route path="/authentication/*" element={!isAuthenticated ? <Authentication /> : <Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  )
}