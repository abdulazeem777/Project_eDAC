import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HotelHomepage from './components/HotelHomepage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RegisterUser from './components/RegisterUser';
import UserLogin from './components/UserLogin';
import UserHome from './components/UserHome';
import HotelBooked from './components/HotelBooked';
import BookingHistory from './components/BookingHistory';
import EditAccount from './components/EditAccount';
import AdministratorLogin from './components/AdministratorLogin';
import ViewHotels from './components/ViewHotels';
import AddHotel from './components/AddHotel';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'js-cookie';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
      <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HotelHomepage}></Route>
                          <Route path = "/registeruser" exact component = {RegisterUser}></Route>
                          <Route path = "/userlogin" exact component = {UserLogin}></Route>
                          <Route path = "/adminlogin" exact component = {AdministratorLogin}></Route>
                          <Route path = "/viewhotels" exact component = {ViewHotels}></Route>
                          <Route path = "/add-hotel/:id/:hotelname" component = {AddHotel}></Route>
                          <Route path = "/userhome/:email" exact component = {UserHome}></Route>
                          <Route path = "/editAccount/:email" exact component = {EditAccount}></Route>
                          <Route path = "/myBookingHostory/:email" exact component = {BookingHistory}></Route>
                          <Route path = "/booked/:hotel_name/:username/:rooms/:email/:price/:name/:country/:phoneno" exact component = {HotelBooked}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
        </CookiesProvider>
    </div>
  );
}

export default App;
