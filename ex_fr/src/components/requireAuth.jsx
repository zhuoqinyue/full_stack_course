import PropTypes from 'prop-types'
import {
  Navigate,
  useLocation,
} from 'react-router-dom'

export default function RequireAuth({ children }) {
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
