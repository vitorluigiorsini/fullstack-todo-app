import Modal from './Modal'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const ListHeader = ({ listName, getData }) => {
  const [, , removeCookie] = useCookies(null)
  const [showModal, setShowModal] = useState(false)

  const signOut = () => {
    console.log('signout')
    removeCookie('Email')
    removeCookie('AuthToken')
    window.location.reload()
  }

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          ADICIONAR
        </button>
        <button className="signout" onClick={signOut}>
          SAIR
        </button>
      </div>
      {showModal && (
        <Modal mode={'criar'} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  )
}

export default ListHeader
