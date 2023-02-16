import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import styles from './App.module.css'

function App() {
  const active = ({ isActive }) => isActive ? styles.active : undefined

  return (
      <>
        <nav>
          <NavLink className={active} to="/">Home</NavLink> | {' '}
          <NavLink className={active} to="/about">About</NavLink> | {' '}
          <NavLink className={active} to="/users">Users</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
        </Routes>
      </>
  )
}

export default App;
