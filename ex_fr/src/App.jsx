import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import Login from '@/pages/Login.jsx'
import Note from '@/pages/Note.jsx'
import User from '@/pages/User.jsx'

// 简单鉴权组件
function RequireAuth({ children }) {
  const { token } =
    JSON.parse(localStorage.getItem('MINECRAFT_USER') || '{}') || {}
  const location = useLocation()
  if (!token && location.pathname !== '/login') {
    return <Navigate to="/login" replace />
  }
  return children
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <>Vite + Express</>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/notes"
          element={
            <RequireAuth>
              <Note />
            </RequireAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
