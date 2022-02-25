import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    //CREATE    http://localhost:8080/api/v1/users
    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    //UPDATE   http://localhost:8080/api/v1/users/1
    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    //DELETE  http://localhost:8080/api/v1/users/1
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()