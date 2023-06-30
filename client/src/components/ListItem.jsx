import { useState } from 'react'
import TickIcon from './TickIcon'
import Modal from './Modal'

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false)

  const [data, setData] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority,
    completed: task.completed
  })

  const editData = async (updated) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/tasks/${task.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated)
        }
      )
      if (response.status === 200) {
        setShowModal(false)
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }

  const deleteItem = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/tasks/${task.id}`,
        {
          method: 'DELETE'
        }
      )
      if (response.status === 204) {
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = () => {
    const updated = { ...data, completed: !data.completed }
    setData(updated)
    editData(updated)
    console.log(updated)
  }

  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <p className="task-title">Prioridade {task.priority}</p>
        <div className="completed-main">
          <label htmlFor="checkbox">Concluído</label>
          <input
            required
            name="completed"
            checked={data.completed}
            type="checkbox"
            id="checkbox"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDITAR
        </button>
        <button className="delete" onClick={deleteItem}>
          DELETAR
        </button>
      </div>
      {showModal && (
        <Modal
          mode={'editar'}
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  )
}

export default ListItem
