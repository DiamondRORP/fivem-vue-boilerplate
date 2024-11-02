import { api } from "@/api";

export const post = async (endpoint, data) => {
    try {
        await api.post(endpoint, data);
    } catch (error) {
        await api.post("error", error);
    }
};

export const get = async (endpoint) => {
    try {
        return await api.get(endpoint);
    } catch (error) {
        await api.post("error", error);
    }
}