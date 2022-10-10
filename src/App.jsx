import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {
  // PARA HACER EL GET DE TODOS LOS USERS
  const [users, setUsers] = useState()

  // PARA PASAR INFORMACION DESDE USERCARD HASTA FORM USER
  const [updateInfo, setUpdateInfo] = useState()

  // PARA ACTIVAR Y DESACTIVAR EL MODAL
  const [modal, setModal] = useState(true)

  //PARA ABRIR Y CERRAR FORMULARIO
  const [formAction, setFormAction] = useState(false)

  //PARA MOSTRAR MODAL DE CONFIRMACION AL ELIMINAR USUARIO
  const [confirmation, setConfirmation] = useState(false)


  // PARA OBTENER LA INFORMACION --GET--
  const baseURL = 'https://users-crud1.herokuapp.com'
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  //PARA CREAR UN NUEVO USUARIO --POST--
  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }


  // PARA ELIMINAR UN USUARIO ESPECIFICO --DELETE--
  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }


  // PARA ACTUALIZAR UN USUARIO EN ESPECIFICO --UPDATE--
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res)
        getAllUsers()
      })
      .then(err => console.log(err))
  }


  return (
    <div className="App">

      <button className='btn__create' onClick={() => setFormAction(false)}>Create New User</button>

      <div className={`container__form ${formAction && 'form__disable'}`}>
        <FormUsers
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setModal={setModal}
          setFormAction={setFormAction}
        />
      </div>

      {
        users?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormAction={setFormAction}
            setConfirmation={setConfirmation}
            confirmation={confirmation}
          />
        ))
      }

    </div>
  )
}

export default App
