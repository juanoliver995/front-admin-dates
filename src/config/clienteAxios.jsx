import axios from "axios";

const clientAxios = axios.create({
    baseURL: "https://back-admin-dates-production.up.railway.app/api"
})

export default clientAxios