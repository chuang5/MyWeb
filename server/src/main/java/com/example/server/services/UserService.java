package com.example.server.services;

import java.util.Optional;

import com.example.server.dao.UserRepository;
import com.example.server.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByuId(long uId){
        return userRepository.findByuId(uId);
    }

    public Optional<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public Optional<User> findByToken(String token){
        return userRepository.findByToken(token);
    }

    public User save(User user){
        return userRepository.save(user);
    }
}
