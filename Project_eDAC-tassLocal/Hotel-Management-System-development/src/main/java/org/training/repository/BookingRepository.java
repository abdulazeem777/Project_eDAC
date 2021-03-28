package org.training.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.training.entity.Booking;


//booking repository
@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{
	List<Booking> findByemail(String email);
}
