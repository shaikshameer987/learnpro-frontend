import { useEffect } from "react";
import { apiCall } from "@/utilities/axios";
import { apiUrls } from "@/urls";
import { User } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import { authenticationSuccess } from "@/store/slices/authSlice";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const Authenticator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const url = apiBaseUrl + apiUrls.getUserDetails;
        const successHandler = (data: User) => {
            dispatch(authenticationSuccess({ user: data }));
        };
        const failureHandler = (data: any) => {
            console.log(data);
        };
        apiCall(url, "GET", successHandler, failureHandler);
    }, []);

    return null;
};

export default Authenticator;
