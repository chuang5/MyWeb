package com.example.server.controller;

import com.example.server.dao.UserRepository;
import com.example.server.model.User;
import com.example.server.payload.LoginRequest;
import com.example.server.payload.SignupRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController{

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public @ResponseBody ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        logger.info("Login: " + loginRequest.toString());
        String username = loginRequest.getUsername();
        String psw = loginRequest.getPassword();
        if(userRepository.existsUserByUsername(username)){
            User user = userRepository.findByUsername(username).get();
            if(psw.equals(user.getPassword())) return ResponseEntity.ok(String.format("Hello %s!", username));
        }
        return ResponseEntity.ok(String.format("Invalid!"));
    }

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest signupRequest){
        logger.info("Signup: " + signupRequest.toString());
        String username = signupRequest.getUsername();
        String psw = signupRequest.getPassword();
        if(username.equals("") || psw.equals("")){
            return "Invalid";
        }else if(userRepository.existsUserByUsername(username)){
            logger.info("Username exists");
            return "Username has used.";
        }
        User user = new User(username, psw);
        user = userRepository.save(user);
        return "User created";
    }
}
