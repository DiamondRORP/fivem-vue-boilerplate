import axios, { AxiosInstance } from "axios";
const resourceName = GetParentResourceName();

// change the baseURL to whatever your resource is called
// example -> baseURL: "https://<resource_name_here>/"
// connection has to be secure ( HTTPS )
export const api: AxiosInstance = axios.create({
    baseURL: `https://${resourceName || 'resource_name'}/`,
});