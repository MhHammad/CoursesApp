import axios from "axios";
import baseurl from "../baseUrl/BaseUrl";


class CourseService{

    login(user)
    {
        return axios.get(`${baseurl}/user/login/${user.email}/${user.password}`)
    }

    signup(user)
    {
        return axios.post(`${baseurl}/user/signup`,user)
    }

}

export default new CourseService()