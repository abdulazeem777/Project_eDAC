package org.training.service;

import java.util.List;
import java.util.Optional;

import org.modal.CustomResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.training.entity.Hotel;
import org.training.entity.User;
import org.training.repository.HotelRepository;
import org.training.repository.UserRepository;

//@Service("hotelService")
@Service
public class HotelService {

	@Autowired
	private HotelRepository hotelRepository;
	
	//Adding new Hotel
	public CustomResponseEntity saveHotel(Hotel hotel) {
		if(hotelRepository.findById(hotel.getHotelname()).isPresent())
		{
			return new CustomResponseEntity(400, hotel, "Hotel details already exists");
		}
		else
		{
			Hotel h = hotelRepository.save(hotel);
			return new CustomResponseEntity(200, h, "Hotel Created");
		}
		
	}
	
	//update Hotel details
	public CustomResponseEntity updateHotel(Hotel hotel) {
		Optional findHotel = hotelRepository.findById(hotel.getHotelname());
		if(findHotel.isPresent())
		{
			Hotel h = hotelRepository.save(hotel);
			return new CustomResponseEntity(200,h,"hotel details updated");
		}
		else
		{
			return new CustomResponseEntity(400,hotel,"hotel not found");
		}
	}
	//get hotel details
	public CustomResponseEntity getAllHoteldetails()
	{
		List<Hotel> hotels = hotelRepository.findAll();
		return new CustomResponseEntity(200, hotels, "Getting hotel details successful");
	}
	//get hotel details by id
	public CustomResponseEntity getDetailsByHotelname(String hotelname)
	{
		Optional h=hotelRepository.findById(hotelname);
		if(h.isPresent())
		{
			Hotel hotel = (Hotel) h.get();
			return new CustomResponseEntity(200, hotel, "Successfully found");
		}
		else {
			return new CustomResponseEntity(400, hotelname, "Hotel not found");
		}
	}

	public CustomResponseEntity deleteHotelByName(String hotelname) {
		// TODO Auto-generated method stub
		Optional<Hotel> o = hotelRepository.findById(hotelname);
		if(o.isPresent()) {
			Hotel h = o.get();
			hotelRepository.delete(h);
			return new CustomResponseEntity(200, hotelname, "Hotel Successfully Deleted!!!");
		}
		else {
			return new CustomResponseEntity(400, hotelname, "Can't delete Hotel");
		}
	}
}
