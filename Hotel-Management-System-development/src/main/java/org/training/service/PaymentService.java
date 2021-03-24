package org.training.service;

import java.util.Optional;

import org.modal.CResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.training.entity.Hotel;
import org.training.entity.PaymentDetails;
import org.training.repository.PaymentRepository;

@Service
public class PaymentService {
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	
	//saving payment
	public CResult savePayment(PaymentDetails pay) {
		Optional<PaymentDetails> p = paymentRepository.findById(pay.getBookingId());
		if(p.isPresent())
		{
			return new CResult(400, pay, "Details already exist");
		}
		else
		{
			return new CResult(200, paymentRepository.save(pay), "Successfully saved");
		}
				
	}
	
	public CResult getPayments() {
		return new CResult(200,paymentRepository.findAll(), "Successfully retrived payments");
	}
	
	//update reservation of hotels
//	public boolean updateReservation(PaymentDetails pay,String email) {
//		if(paymentRepository.findById(email)!=null)
//		{
//			paymentRepository.delete(pay);
//			paymentRepository.save(pay);
//			return true;
//		}
//		else
//		{
//			return false;
//		}
//	}
	
	
	//cancel reservation of hotels
//	public boolean cancelReservation(String email, String hotelname) {
//		if(paymentRepository.findById(email)!=null)
//		{
//			paymentRepository.deleteById(email);
//			return true;
//		}
//		else
//		{
//			return false;
//		}
//	}

}
