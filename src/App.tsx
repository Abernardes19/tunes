import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Album from "./pages/Album"
import Favorites from "./pages/Favorites"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Search from "./pages/Search"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          localStorage.getItem("tunes") ? <Navigate to="/search" /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={ localStorage.getItem("tunes") ? <Navigate to="/search" /> : <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> }/>
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </BrowserRouter>
  )
}
