package com.example.server.controller;

import com.example.server.payload.LoginRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController{

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public String sayHello(@RequestBody LoginRequest loginRequest){
        logger.info("in this line");
        String username = loginRequest.getUsername();
        String psw = loginRequest.getPassword();
        if(username.equals("admin") && psw.equals("admin")) return String.format("Hello %s!", username);
        return String.format("Invalid!");
    }
}
