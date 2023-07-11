import { Routes, Route } from 'react-router-dom'

import { AuthScreen, HomeScreen } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="*" element={<AuthScreen />} />
    </Routes>
  )
}
