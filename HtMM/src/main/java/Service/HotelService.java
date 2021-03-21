package Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.User;
import repository.UsersRepository;

@Service
public class HotelService {

	@Autowired
	private UsersRepository urep;
	
	public boolean adduser(User u) {
		// TODO Auto-generated method stub
		boolean s = false;
		try {
			urep.save(u);
			s = true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return s;
	}

	public String login(String email, String password) {
		// TODO Auto-generated method stub
		String s = null;
		try {
			Optional<User> c = urep.findById(email);
			if(c.isPresent())
			{
				User u = c.get();
				if(u.getPassword().equalsIgnoreCase(password))
				{
					s = u.getUser_name();
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return s;
	}

	public User getusers(String email) {
		// TODO Auto-generated method stub
		User u = new User(" ", " ", " ");
		Optional<User> c = urep.findById(email);
		if(c.isPresent())
		{
			u = c.get();
		}
		return u;
	}

}
