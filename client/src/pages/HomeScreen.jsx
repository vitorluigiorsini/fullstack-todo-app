import { useEffect, useState, useCallback } from 'react'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'

import { ListHeader, ListItem } from '../components'

const HomeScreen = () => {
  const [cookies] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const [tasks, setTasks] = useState(null)

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/tasks/${userEmail}`
      )
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }, [userEmail])

  useEffect(() => {
    if (authToken) {
      getData()
    }
  }, [authToken, getData])

  //Sort by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  if (!authToken) {
    return <Navigate to="/" />
  }

  return (
    <div className="app">
      <ListHeader listName={'Gerenciador de tarefas'} getData={getData} />
      <p className="user-email">Bem-vindo de volta {userEmail}</p>
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
      <p className="copyright">© Vitor Orsini</p>
    </div>
  )
}

export default HomeScreen
