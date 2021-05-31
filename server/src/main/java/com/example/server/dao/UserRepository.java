package com.example.server.dao;

import java.util.Optional;

import com.example.server.model.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
    boolean existsUserByUsername(String username);
    Optional<User> findByUsername(String username);
    
    User findByuId(long uId);
}
