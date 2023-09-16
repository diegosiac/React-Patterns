import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../assets/react.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/Home" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='about' element={<h3>About Page</h3>}/>
                <Route path='users' element={<h3>Users Page</h3>}/>
                <Route path='home' element={<h3>Home Page</h3>}/>

                <Route path='/*' element={<Navigate to='/home' replace/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
