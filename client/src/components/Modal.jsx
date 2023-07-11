import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies] = useCookies(null)
  const editMode = mode === 'editar' ? true : false

  const [data, setData] = useState({
    title: editMode ? task.title : '',
    description: editMode ? task.description : '',
    dueDate: editMode ? task.dueDate : '',
    priority: editMode ? task.priority : 'baixa',
    completed: editMode ? task.completed : false,
    userEmail: editMode ? task.userEmail : cookies.Email
  })

  const postData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/tasks`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
      )
      if (response.status === 201) {
        setShowModal(false)
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }

  const editData = async (e) => {
    e.preventDefault()
    const updated = {
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority,
      completed: data.completed
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/tasks/${task.id}`,
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((data) => ({
      ...data,
      [name]: value
    }))
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Vamos {mode} sua tarefa</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=" Titulo da tarefa*"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <textarea
            maxLength={200}
            rows={3}
            placeholder=" Descrição"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          <input
            required
            maxLength={10}
            placeholder=" Data de conclusão*"
            name="dueDate"
            value={data.dueDate}
            onChange={handleChange}
          />
          <select
            required
            name="priority"
            value={data.priority}
            onChange={handleChange}
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
          <br />
          <input
            className={mode}
            type="submit"
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  )
}

export default Modal
