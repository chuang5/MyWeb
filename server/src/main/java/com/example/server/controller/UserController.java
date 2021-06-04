package com.example.server.controller;

import com.example.server.dao.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
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
    public @ResponseBody ResponseEntity<?> loadCurrentUser(@RequestHeader(value = "token") String token){
        logger.info("LoadCurrentUser: " + token);
        if(userRepository.existsUserByToken(token)){
            return ResponseEntity.ok(
                userRepository.findByToken(token).get()
            );
        }
        return ResponseEntity.notFound().build();
    }

}