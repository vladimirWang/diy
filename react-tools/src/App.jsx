import React, {useState, useEffect} from 'react'
import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom'
import FieldFormPage from './pages/FieldForm/index.jsx'

function Child() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/field-form">my field form</Link>
        <hr />
        <Routes>
          <Route path="/field-form" element={<FieldFormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Child;