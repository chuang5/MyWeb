package com.example.server.controller;

import com.example.server.dao.UserRepository;
import com.example.server.payload.LoadUserRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController{
    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/me")
    public @ResponseBody ResponseEntity<?> loadCurrentUser(@RequestBody LoadUserRequest loadUserRequest){
        logger.info("LoadCurrentUser: " + loadUserRequest.toString());
        String token = loadUserRequest.getToken();
        if(userRepository.existsUserByToken(token)){
            return ResponseEntity.ok(
                userRepository.findByToken(token).get()
            );
        }
        return ResponseEntity.notFound().build();
    }

}