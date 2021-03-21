package Hotel.Hotel_Management;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import entity.Hotel;
import entity.User;
import repository.HotelRepository;
import repository.UsersRepository;

@ComponentScan("repository,entity,Controller,Service")
@EnableJpaRepositories("repository")
@SpringBootApplication
@EntityScan("entity")
public class HotelManagementApp{

//	@Autowired
//	private HotelRepository hrp;
//	@Autowired
//	private UsersRepository urepp;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
       SpringApplication.run(HotelManagementApp.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//		// TODO Auto-generated method stub
//		//urepp.save(new Users("vasu@cd.com", "Vasu", "Vasu@123"));
//		hrp.save(new Hotel(3, "JKL", 25));
//		
//	}


}
