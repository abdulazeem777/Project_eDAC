package repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.User;



@Repository
public interface UsersRepository extends JpaRepository<User, String>{

}
