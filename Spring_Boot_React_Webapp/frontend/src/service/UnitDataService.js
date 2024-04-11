import axios from 'axios'

const INSTRUCTOR_API_URL = `http://localhost:8080`

class UnitDataService {

    retrieveAllUnits() {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/units`);
    }

    retrieveUnit(id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/units/${id}`);
    }

    deleteUnit(id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/units/${id}`);
    }

    updateUnit(id, unit) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/units/${id}`, unit);
    }

    createUnit(unit) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/units/`, unit);
    }
}

export default new UnitDataService()