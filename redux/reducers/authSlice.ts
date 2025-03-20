import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileInfo {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    passwordHash: string;
}

interface AuthState {
    profile: ProfileInfo | null;
    error: string | null;
}

const initialState: AuthState = {
    profile: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<ProfileInfo>) {
            state.profile = action.payload;
            state.error = null;
        },
        loginFail(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

export const { loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;