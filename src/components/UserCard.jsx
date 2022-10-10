import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormAction, setConfirmation, confirmation }) => {

    const handleEdite = () => {
        setUpdateInfo(user)
        setFormAction(false)
    }

    return (
        <article className='container__card'>

            <div className={`confirmacion ${confirmation && 'confirmacion__active'}`}>
                <div className='confirmacion__card'>
                    <h3>Do you want to delete this user?</h3>
                    <div className='confirmacion__btns'>
                        <button onClick={() => { setConfirmation(false), deleteUserById(user.id) }} className='confirmacion__btn confirmation__yes'>Yes</button>
                        <button onClick={() => setConfirmation(false)} className='confirmacion__btn confirmation__not'>Not</button>
                    </div>
                </div>
            </div>

            <div className='tilt-box-wrap'>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <span className='t_over'></span>
                <div className='tilt-box'>
                    <div className='card'>

                        <div className='card__figure1 figure'></div>
                        <div className='card__figure2 figure'></div>
                        <div className='card__figure3 figure'></div>
                        <div className='card__figure4 figure'></div>
                        <div className='card__figure figure'></div>

                        <div className='card__figure5 '></div>
                        <div className='card__figure6'></div>
                        <div className='card__figure7'></div>
                        <div className='card__figure8'></div>


                        <div className='card__info'>

                            <div className='card__flash'></div>

                            <header className='card__header'>
                                <h2 className='card__name'>{`${user.first_name} ${user.last_name}`}</h2>
                            </header>

                            <div className='card__body'>
                                <ul>
                                    <li><span>Email:</span> {`${user.email}`}</li>
                                    <li><span>Birthday:</span> {`${user.birthday}`}</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <footer className='card__btns'>
                <i onClick={() => setConfirmation(true)} className="fa-solid fa-trash-can btn"></i>
                <i onClick={handleEdite} className="fa-solid fa-pen-to-square btn"></i>
            </footer>

        </article>
    )
}

export default UserCard