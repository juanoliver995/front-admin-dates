import { Route, Routes, HashRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthProvider'
import { DatesProvider } from './context/DatesProvider'
import ProtectedPath from './layouts/ProtectedPath'
import Dates from './pages/Dates'
import NewDate from './pages/NewDate'
import EditDate from './pages/EditDate'

function App() {


  return (
    <HashRouter>
      <AuthProvider>
        <DatesProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path='/dates' element={<ProtectedPath />}>
              <Route index element={<Dates />} />
              <Route path='create-date' element={<NewDate />} />
              <Route path='edit-date/:id' element={<EditDate />} />
            </Route>
          </Routes>
        </DatesProvider>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
