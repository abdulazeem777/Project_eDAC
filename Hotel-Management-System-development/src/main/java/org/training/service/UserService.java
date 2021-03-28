package org.training.service;

import java.util.List;
import java.util.Optional;

import org.modal.CustomResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.training.entity.Hotel;
import org.training.entity.User;
import org.training.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	
	//adding new user
	public  CustomResponseEntity saveUser(User user) 
	{
		if(userRepository.findById(user.getEmail()).isPresent())
		{
			return new CustomResponseEntity(400, user, "user details already exists");
		}
		else
		{
			User h = userRepository.save(user);
			return new CustomResponseEntity(200, h, "user Created");
		}
		
	}
	//update user details
	public CustomResponseEntity updateUser(User user) {
		Optional finduser = userRepository.findById(user.getEmail());
		if(finduser.isPresent())
		{
			User h = userRepository.save(user);
			return new CustomResponseEntity(200,h,"User details updated");
		}
		else
		{
			return new CustomResponseEntity(400,user,"user not found");
		}
	}
	//get user details
	public CustomResponseEntity getAllUserdetails()
	{
		List<User> users = userRepository.findAll();
		return new CustomResponseEntity(200, users, "Getting user details successful");
	}
	
	//get user details by email
	public CustomResponseEntity getDetailsByEmail(String email)
	{
		Optional h=userRepository.findById(email);
		if(h.isPresent())
		{
			User user = (User) h.get();
			return new CustomResponseEntity(200, user, "Successfully found");
		}
		else
		{
			return new CustomResponseEntity(400, email, "user not found");
		}
	}
	//validation of user for login
	public CustomResponseEntity validate(String email, String password) {
		System.out.println("mail:"+email);
		Optional<User> user = userRepository.findById(email);
		//System.out.println("mailid23:"+user.getEmail());
		if((user.isPresent()))
		{
			//System.out.println("mailid:"+user.getEmail());
			if(user.get().getPassword().equals(password))
			{
				System.out.println("valid user");
				return new CustomResponseEntity(200,email,"validation successful");
			}
			else
			{
				return new CustomResponseEntity(400,email,"valiadation unsuccessful");
			}
		}
		else
			return new CustomResponseEntity(400,email,"validation unsuccessful");
		
	}
}
