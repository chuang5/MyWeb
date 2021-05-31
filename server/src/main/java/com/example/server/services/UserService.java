package com.example.server.services;

import com.example.server.dao.UserRepository;
import com.example.server.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByUId(long uId){
        return userRepository.findByUId(uId);
    }

    public User save(User user){
        return userRepository.save(user);
    }
}
