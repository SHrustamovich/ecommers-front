import axios, { AxiosInstance } from "axios";
import {  domain,  } from "./urls";

interface Axios extends AxiosInstance {
    [key: string]: any;
}
const $host: Axios = axios.create({
    baseURL: `${domain}`,
});
axios({
    method: "",
});
const $authHost: Axios = axios.create({
    baseURL: `${domain}`,
});


export { $authHost, $host };
