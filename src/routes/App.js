import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../container/Login";
import Register from "../container/Register";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { DashboardRouter } from "./DashboardRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [])

  if (checking) {
    return (
      <div className="flex flex-col justify-center items-center my-32">
        <ClipLoader color={'blue'} loading={true} size={150} />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute isAuthenticated={isLoggedIn} >
            <Login />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <Register />
          </PublicRoute>
        } />
        <Route path="/*" element={
          <PrivateRoute isAuthenticated={isLoggedIn}>
            <DashboardRouter />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
