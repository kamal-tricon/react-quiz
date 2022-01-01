import axios from "axios";
import { urlConfig } from "../environments/environment";

const {baseUrl} = urlConfig;

export const apiCalls = {
    saveTrain: (requestBody) => {
        return axios.post(`${baseUrl}/addtrain`, requestBody);
    },

    getMatchingTrains: (requestBody) => {
        return axios.post(`${baseUrl}/search`, requestBody);
    },

    getAllTrains: () => {
        return axios.get(`${baseUrl}/list`);
    }
};