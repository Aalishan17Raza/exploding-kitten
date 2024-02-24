import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    deck: ['Cat card 😼', 'Cat card 😼', 'Defuse card 🙅‍♂️', 'Shuffle card 🔀', 'Exploding kitten card 💣'],
    hand: [],
    allCard: ['Cat card 😼', 'Defuse card 🙅‍♂️', 'Shuffle card 🔀', 'Exploding kitten card 💣'],
    isGameWon: false,
};


const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        drawCards: (state, action) => {
            const chosenCard =state.deck[Math.floor(Math.random() * state.deck.length)];
            state.hand.push(chosenCard);
            let cnt=0; 
            state.deck = state.deck.filter(d => {
                if(state.hand[state.hand.length-1]==d && cnt==0){
                    cnt++;
                    return false;
                }
                return true;
            });
        },
        suffleCard: (state, action) => {
            for (let index = 0; index < 5; index++) {
                state.deck[index] = state.allCard[Math.floor(Math.random() * 4)];
            }
            state.hand=[];
        },
        GameWon: (state,action)=>{
            state.isGameWon=true;
        }
    }
});

export default CardSlice.reducer;
export const CardActions = CardSlice.actions;