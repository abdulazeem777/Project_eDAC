package org.training.controller;

import org.modal.CustomResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.training.entity.Hotel;
import org.training.entity.Booking;
import org.training.entity.User;
import org.training.service.BookingService;

@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/allBookings")
	public CustomResponseEntity getPayment() {
		return bookingService.getPayments();
	}
	
	@PutMapping("/saveBooking")
	public CustomResponseEntity createPayment(@RequestBody Booking pay) {
		return bookingService.savePayment(pay);
	}
	@PostMapping("/updateBooking")
	public CustomResponseEntity updateBooking(@RequestBody Booking pay)
	{
		return bookingService.updateBooking(pay);
	}
	@DeleteMapping("/deletebooking/{bookingId}")
	public CustomResponseEntity deleteBooking(@PathVariable int bookingId)
	{
		return bookingService.deleteBooking(bookingId);
	}
}
