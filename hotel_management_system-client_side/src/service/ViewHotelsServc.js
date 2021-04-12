import axios from 'axios';

const GET_HOTELS_URL = "http://localhost:8080/getAllHoteldetails";
const ADD_USER_URL = "http://localhost:8080/addNewUser";
const LOGIN_URL = "http://localhost:8080/validate";
const HOTEL_ADD_URL = "http://localhost:8080/addNewHotel";
const GET_HOTEL_BY_NAME_URL = "http://localhost:8080/getDetailsByHotelname";
const GET_USER_BY_EMAIL = "http://localhost:8080/getDetailsByEmail";
const ADD_BOOKING_URL = "http://localhost:8080/saveBooking";
const GET_BOOKINGS_BY_EMAIL_URL = "http://localhost:8080/allBookingsByEmail";
const UPDATE_USER_URL = "http://localhost:8080/updateuser";
const UPDATE_HOTEL_URL = "http://localhost:8080/updateHotel";
const DELETE_HOTEL_URL = "http://localhost:8080/deleteHotel"

class ViewHotelsServc{

    getHotels(){
        return axios.get(GET_HOTELS_URL);
    }

    addUser(user){
       return axios.put(ADD_USER_URL , user);
    }

    getUserDetailsByEmail(email){
        return axios.get(GET_USER_BY_EMAIL + '/' + email);
    }

    userLogin(email, password){
        return axios.get(LOGIN_URL +'/'+ email +'/'+ password);
    }

    addBooking(booking){
        return axios.put(ADD_BOOKING_URL, booking);
    }

    getBookingsByEmail(email){
        return axios.get(GET_BOOKINGS_BY_EMAIL_URL +'/'+ email);
    }

    updateUser(user){
        return axios.post(UPDATE_USER_URL, user);
    }

    createHotel(hotel){
        return axios.put(HOTEL_ADD_URL, hotel);
    }

    updateHotel(hotel){
        return axios.post(UPDATE_HOTEL_URL, hotel);
    }

    deleteHotel(hotelname){
        return axios.delete(DELETE_HOTEL_URL + '/' + hotelname);
    }

    getHotelbyname(hotelname){
        return axios.get(GET_HOTEL_BY_NAME_URL + '/' + hotelname);
    }
}

export default new ViewHotelsServc()