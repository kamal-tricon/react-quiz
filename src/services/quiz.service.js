import axios from "axios";
import { urlConfig } from "../environments/environment";

const {baseUrl} = urlConfig;

export const quizAPI = {
    saveQuiz: (req) => {
        return axios.post(`${baseUrl}/savequizz`, req);
    },

    getQuizs: () => {
        return axios.post(`${baseUrl}/getquizz`, {})
    },

    getQuizDetails: (req) => {
        return axios.post(`${baseUrl}/getquizzdetails`, req)
    },

    updateQuiz: (req) => {
        return axios.post(`${baseUrl}/updatequizz`, req)
    },

    deleteQuiz: (req) => {
        return axios.post(`${baseUrl}/deletequiz`, req)
    }
}