import axios from "axios";

type ApiMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const apiCall = async (
    url: string,
    method: ApiMethod,
    data: any,
    successHandler: (data: any) => void,
    failureHandler: (data: any) => void,
    headers?: Record<string, string>
) => {
    try {
        const request = await axios({
            url: url,
            method: method,
            data: data,
            headers: headers ? headers : {},
            withCredentials: true,
        });
        const response = request.data;
        if (response.success) successHandler(response.data);
        else failureHandler(response);
    } catch (error: any) {
        const data = error?.response?.data;
        const responseData = {
            success: false,
            data: null,
            errorCode: data?.errorCode ? data.errorCode : "",
            erroMsg: data?.erroMsg ? data.erroMsg : "Something went wrong",
        };
        failureHandler(responseData);
    }
};
