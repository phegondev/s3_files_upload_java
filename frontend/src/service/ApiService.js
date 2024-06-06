import axios from "axios"

export default class ApiService {

    static BASE_URL = "http://localhost:5050"

    /**Add FIle */
    static async addFile(formData) {
        const result = await axios.post(`${this.BASE_URL}/file/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data;
    }

    /* This  gets all files */
    static async getAllFiles() {
        const result = await axios.get(`${this.BASE_URL}/file/get-all`)
        return result.data
    }

}