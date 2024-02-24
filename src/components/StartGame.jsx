import React, { useRef, useState } from 'react'
import { CardActions } from '../features/CardSlice';
import { ShowHand } from './ShowHand';
import { useDispatch, useSelector } from 'react-redux';
import { BackCard } from './BackCard';
import { Navigate } from 'react-router-dom';
import { UserActions } from '../features/UserSlice';

function renderImage(card) {
    if (card == 'Cat card 😼') return "http://localhost:5173/cat-card.png";
    else if (card == 'Defuse card 🙅‍♂️') return "http://localhost:5173/diffuse-card.png";
    else if (card == 'Shuffle card 🔀') return "http://localhost:5173/suffle-card.png";
    else if (card == 'Exploding kitten card 💣') return "http://localhost:5173/exploding-kitten-card.png";
}


export const StartGame = () => {
    let diffuseCount = useRef(0);
    const dispatch = useDispatch();
    const currentHand = useSelector((state) => state.card.hand);
    const deck = useSelector((state) => state.card.deck);
    const userState = useSelector((state) => state.user);

    const [clicked, setClicked] = useState(false);

    if (userState.username == '') {
        return <Navigate to={'/'} />
    }

    function handleClickImg(e) {
        e.currentTarget.src = '';
        dispatch(CardActions.drawCards());
        setClicked(true);
    }
    console.log(diffuseCount.current);
    if (clicked) {
        const chosenCard = currentHand[currentHand.length - 1]
        if (chosenCard == 'Defuse card 🙅‍♂️') {
            diffuseCount.current++;
        }
        if (chosenCard == 'Shuffle card 🔀') {
            diffuseCount.current = 0;
            alert('Shuffle card 🔀 activated');
            dispatch(CardActions.suffleCard());
        }
        if (chosenCard == 'Exploding kitten card 💣' && diffuseCount.current == 0) {
            alert("BOOM! Exploding kitten 💣 activated GAME OVER!");
            dispatch(UserActions.setScoreToZero())
            dispatch(CardActions.suffleCard());
        }
        if (chosenCard == 'Exploding kitten card 💣') {
            if (diffuseCount.current > 0)
                diffuseCount.current--;
        }
    }

    return (
        <>
            {
                userState.username != '' && <><div style={{ marginLeft: '7px' }}><span style={{ fontWeight: 'bold' }}>Username: </span> {userState.username} <span style={{ fontWeight: 'bold' }}>Score:</span> {userState.score}</div></>
            }
            <div style={{ marginLeft: '45%', fontSize: '18px', marginBottom: '10px', fontWeight: '500' }}>Choose a Card!</div>
            <div className='GamePage'>
                {deck.length > 0 ? deck.map(d =>
                    <BackCard key={self.crypto.randomUUID()} handleClickImg={handleClickImg} />)
                    : <>
                        <div className='restart'><button onClick={() => {
                            dispatch(CardActions.GameWon());
                            dispatch(CardActions.suffleCard());
                            diffuseCount.current=0;
                        }}>You Won! click to restart</button></div>
                    </>
                }
            </div>
            {clicked &&
                <div className='showHand'>
                    {currentHand.map((d) => {
                        return <ShowHand key={self.crypto.randomUUID()} 
                        currentHand={currentHand} 
                        chosenCard={d} 
                        url={renderImage(d)} />
                    })}
                </div>
            }
        </>
    )
}
