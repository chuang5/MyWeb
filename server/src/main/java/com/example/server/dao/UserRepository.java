package com.example.server.dao;

import java.util.Optional;

import com.example.server.model.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
    boolean existsUserByUsername(String username);
    Boolean existsUserByToken(String token);
    Optional<User> findByUsername(String username);
    Optional<User> findByToken(String token);
    
    User findByuId(long uId);
}
