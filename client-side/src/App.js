import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Poc1 from './components/Poc1';
import ViewHotels from './components/ViewHotels';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RegisterUser from './components/RegisterUser';
import HotelHomepage from './components/HotelHomepage';
import UserLogin from './components/UserLogin';
import UserHome from './components/UserHome';
import HotelBooked from './components/HotelBooked';
import AdministratorLogin from './components/AdministratorLogin';
import AddHotel from './components/AddHotel';



function App() {
  return (
    <div className="App">
      <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HotelHomepage}></Route>
                          <Route path = "/registeruser" exact component = {RegisterUser}></Route>
                          <Route path = "/userlogin" exact component = {UserLogin}></Route>
                          <Route path = "/adminlogin" exact component = {AdministratorLogin}></Route>
                          <Route path = "/viewhotels" exact component = {ViewHotels}></Route>
                          <Route path = "/add-hotel/:id" component = {AddHotel}></Route>
                          <Route path = "/userhome/:email/:username/:password" exact component = {UserHome}></Route>
                          <Route path = "/booked/:hotel_name/:username/:rooms/:email/:password" exact component = {HotelBooked}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
