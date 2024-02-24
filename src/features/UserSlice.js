import { createSlice } from '@reduxjs/toolkit';
import { CardActions } from './CardSlice';

const initialState = {
    username: '',
    score: 0
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setScoreToZero:(state,action)=>{
            //game lost
            state.score=0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(CardActions.GameWon, (state, action) => {
           state.score++;
        })
    }
});

export default UserSlice.reducer;
export const UserActions = UserSlice.actions;