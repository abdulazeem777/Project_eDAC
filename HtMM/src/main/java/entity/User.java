package entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="users")
public class User {

	@Id
	private String email;
	private String user_name;
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User(String email, String user_name, String password) {
		super();
		this.email = email;
		this.user_name = user_name;
		this.password = password;
	}
	public User() {
	}
	
	
}
