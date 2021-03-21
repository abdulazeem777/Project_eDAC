import axios from 'axios';

const pocurl = "http://localhost:8080/getuser?x=shan@cd.com";

class Poc1serv {

    getusername(){
        return axios.get(pocurl);
    }
}

export default new Poc1serv()