import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'



const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setModal, setFormAction }) => {

    // PARA VACIAR INPUTS
    const defaultValues = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    }

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        if (updateInfo) { reset(updateInfo) }
    }, [updateInfo])


    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser(data)
        }
        reset(defaultValues)
        setFormAction(true)
    }


    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <i onClick={() => setFormAction(true)} className="fa-solid fa-xmark btn__exit"></i>
            <h2>{updateInfo ? 'Edit User' : 'New User'}</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' {...register('email')} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' {...register('password')} />
            </div>
            <div>
                <label htmlFor="first_name">First_name:</label>
                <input type="text" id='first_name' {...register('first_name')} />
            </div>
            <div>
                <label htmlFor="last_name">Last_name:</label>
                <input type="text" id='last_name' {...register('last_name')} />
            </div>
            <div>
                <label htmlFor="birthday">Birthday:</label>
                <input type="date" id='birthday' {...register('birthday')} />
            </div>
            <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormUsers