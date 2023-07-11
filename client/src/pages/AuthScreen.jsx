import { useCookies } from 'react-cookie'

import { Auth } from '../components'
import { Navigate } from 'react-router-dom'

const AuthScreen = () => {
  const [cookies] = useCookies(null)
  const authToken = cookies.AuthToken

  if (authToken) {
    return <Navigate to="/home" />
  }

  return (
    <div className="app">
      <Auth />
      <p className="copyright">© Vitor Orsini</p>
    </div>
  )
}

export default AuthScreen
