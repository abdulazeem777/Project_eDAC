import axios from 'axios';

const GET_HOTELS_URL = "http://localhost:8080/getallhotels";
const UNI_URL = "http://localhost:8080/adduser";
const LOGIN_URL = "http://localhost:8080/login";
const HOTEL_BASE_URL = "http://localhost:8080/hotel";
const GET_HOTEL_BY_ID_URL = "http://localhost:8080/gethotelbyid"

class ViewHotelsServc{

    getHotels(){
        return axios.get(GET_HOTELS_URL);
    }

    addUser(user){
       return axios.put(UNI_URL , user);
    }

    userLogin(email, password){
        return axios.get(LOGIN_URL +'/'+ email +'/'+ password);
    }

    createHotel(hotel){
        return axios.post(HOTEL_BASE_URL, hotel);
    }

    updateHotel(hotel, hotelId){
        return axios.put(HOTEL_BASE_URL + '/' + hotelId, hotel);
    }

    deleteHotel(hotelId){
        return axios.delete(HOTEL_BASE_URL + '/' + hotelId);
    }

    getHotelbyId(hotelId){
        return axios.get(GET_HOTEL_BY_ID_URL + '/' + hotelId);
    }
}

export default new ViewHotelsServc()