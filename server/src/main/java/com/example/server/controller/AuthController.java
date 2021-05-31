package com.example.server.controller;

import com.example.server.dao.UserRepository;
import com.example.server.model.User;
import com.example.server.payload.LoginRequest;
import com.example.server.services.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController{

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public String sayHello(@RequestBody LoginRequest loginRequest){
        logger.info("in this line");
        String username = loginRequest.getUsername();
        String psw = loginRequest.getPassword();
        if(userRepository.existsUserByUsername(username)){
            User user = userRepository.findByUsername(username).get();
            if(psw.equals(user.getPassword())) return String.format("Hello %s!", username);
        }
        return String.format("Invalid!");
    }
}
