import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login.jsx'
import Note from '@/pages/Note.jsx'
import User from '@/pages/User.jsx'
import ThemeProvider from '@/components/providers/theme-provider.jsx'
import RequireAuth from '@/components/requireAuth.jsx'
import ModeToggle from './components/mode-toggle'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="fixed top-4 right-4">
          <ModeToggle />
        </div>
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
    </ThemeProvider>
  )
}

export default App
