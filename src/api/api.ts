import axios from 'axios'
import { Dentist } from "../models/Dentist";
const apiUrl = process.env.API_URL;
export async function fetchAll() {
    return axios.get(`${apiUrl}/dentists`).then(res => res.data)
}

export function fetchOne(id: string) {
    return axios.get(`${apiUrl}/dentist/${id}`).then(res => res.data)
}

export function fetchAllDentistIds() {
    return axios.get(`${apiUrl}/dentists`)
        .then(res => res.data
            .map((dentist: Dentist) =>
                ({ params: { id: dentist._id } })
            )
        )
}