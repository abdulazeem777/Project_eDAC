package org.training.controller;

import org.modal.CResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.training.entity.PaymentDetails;
import org.training.entity.User;
import org.training.service.PaymentService;

@RestController
public class PaymentController {
	
	@Autowired
	private PaymentService paymentService;
	
	@GetMapping("/allPayment")
	public CResult getPayment() {
		return paymentService.getPayments();
	}
	
	@PutMapping("/saveBooking")
	public CResult createPayment(@RequestBody PaymentDetails pay) {
		return paymentService.savePayment(pay);
	}
}
