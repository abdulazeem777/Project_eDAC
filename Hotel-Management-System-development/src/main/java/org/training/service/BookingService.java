package org.training.service;

import java.util.List;
import java.util.Optional;

import org.modal.CustomResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.training.entity.Hotel;
import org.training.entity.Booking;
import org.training.repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	private BookingRepository bookingRepository;
	
	
	//saving payment
	public CustomResponseEntity savePayment(Booking pay) {
		Optional<Booking> p = bookingRepository.findById(pay.getBookingId());
		if(p.isPresent())
		{
			return new CustomResponseEntity(400, pay, "Details already exist");
		}
		else
		{
			return new CustomResponseEntity(200, bookingRepository.save(pay), "Successfully saved");
		}
				
	}
	
	public CustomResponseEntity getPayments() {
		return new CustomResponseEntity(200,bookingRepository.findAll(), "Successfully retrived payments");
	}
	
	//update reservation of hotels
	public CustomResponseEntity updateBooking(Booking pay) {
		if(bookingRepository.findById(pay.getBookingId()).isPresent())
		{
			Booking h = bookingRepository.save(pay);
			return new CustomResponseEntity(200,h,"booking details updated");
		}
		else
		{
			return new CustomResponseEntity(400, pay, "booking details not found");
		}
	}
	//delete reservation
	public CustomResponseEntity deleteBooking(int bookingId)
	{
		if(bookingRepository.findById(bookingId).isPresent())
		{
			 bookingRepository.deleteById(bookingId);
			return new CustomResponseEntity(200,bookingId,"booking details deleted");
		}
		else
		{
			return new CustomResponseEntity(400,bookingId,"booking details not found");
		}
	}

	public CustomResponseEntity getBookings(String email) {
		// TODO Auto-generated method stub
		List<Booking> b = bookingRepository.findByemail(email);
		String reason = "Found Bookings";
		return new CustomResponseEntity(200, b, reason);
	}

}
