import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { toast } from "react-toastify";
import { AppDispatch } from "../redux/store";

export const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const dispatch = useDispatch<AppDispatch>();

    const validate = () => {
        const errors: { email?: string; password?: string } = {};
        if (!email) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";
        return errors;
    };

    const handleSubmit = async () => {
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            await dispatch(login(email, password));
            toast.success("Login successful!");
        } catch (error) {
            toast.error("Invalid email or password");
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        handleSubmit,
    };
};