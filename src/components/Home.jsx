import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserActions } from '../features/UserSlice';
import { useDispatch } from 'react-redux';
export const Home = () => {
    const dispatch = useDispatch();
    const [redirect, setRedirect] = useState(false);
    if (redirect) {
        return <Navigate to={'/start-game'} />
    }
    return (
        <>
            <div className='start-game-form'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(UserActions.setUsername(e.target[0].value));
                    setRedirect(true);
                }}>
                    <span>Enter a username:</span>
                    <input type='text' required />
                    <button>Start Game</button>
                </form>
            </div>
        </>
    )
}
