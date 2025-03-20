import axios from "axios";
import { AppDispatch } from "../store";
import { loginSuccess, loginFail } from "../reducers/authSlice";

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        interface LoginResponse {
            token: string;
        }

        const response = await axios.post<LoginResponse>("https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io/sign-in-request", {
            email,
            password,
        });

        const { token } = response.data;

        interface ProfileResponse {
            data: {
                profileInfo: any;
            };
        }

        const profileResponse = await axios.get<ProfileResponse>("https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io/profile", {
            headers: {
                "x-auth-token": token,
            },
        });

        dispatch(loginSuccess(profileResponse.data.data.profileInfo));

        localStorage.setItem("token", token);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            dispatch(loginFail(error.response?.data.message || "An error occurred"));
        } else {
            dispatch(loginFail("An unknown error occurred"));
        }
        throw error;
    }
};