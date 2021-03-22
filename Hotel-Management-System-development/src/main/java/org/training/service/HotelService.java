package org.training.service;

import java.util.List;
import java.util.Optional;

import org.modal.CResult;
import org.springframework.beans.factory.annotation.Autowired;
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
	public CResult saveHotel(Hotel hotel) {
		if(hotelRepository.findById(hotel.getHotelname()).isPresent())
		{
			return new CResult(400, hotel, "Hotel details already exists");
		}
		else
		{
			Hotel h = hotelRepository.save(hotel);
			return new CResult(200, h, "Hotel Created");
		}
		
	}
	
	//update Hotel details
	public CResult updateHotel(Hotel hotel) {
		Optional findHotel = hotelRepository.findById(hotel.getHotelname());
		if(findHotel.isPresent())
		{
			Hotel h = hotelRepository.save(hotel);
			return new CResult(200,h,"hotel details updated");
		}
		else
		{
			return new CResult(400,hotel,"hotel not found");
		}
	}
	//get hotel details
	public CResult getAllHoteldetails()
	{
		List<Hotel> hotels = hotelRepository.findAll();
		return new CResult(200, hotels, "Getting hotel details successful");
	}
	//get hotel details by id
	public CResult getDetailsByHotelname(String hotelname)
	{
		Optional h=hotelRepository.findById(hotelname);
		if(h.isPresent())
		{
			Hotel hotel = (Hotel) h.get();
			return new CResult(200, hotel, "Successfully found");
		}
		else {
			return new CResult(400, hotelname, "Hotel not found");
		}
	}
}
