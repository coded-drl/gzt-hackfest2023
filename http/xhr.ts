import axios, { AxiosInstance } from "axios";

const baseURL = process.env.BACKEND_BASE_URL;

const config: any = {
    baseURL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
};

// Create new axios instance
const $http: AxiosInstance = axios.create(config);

export default $http;
