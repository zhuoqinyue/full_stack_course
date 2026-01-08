import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Note from '@/pages/Note'
import User from '@/pages/User'
import ThemeProvider from '@/components/providers/theme-provider'
import RequireAuth from '@/components/requireAuth'
import ModeToggle from '@/components/mode-toggle'

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
