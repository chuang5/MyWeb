package com.example.server.controller;

import com.example.server.payload.LoginRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    Logger logger = LoggerFactory.getLogger(HelloController.class);

    @PostMapping("/login")
    public String sayHello(@RequestBody LoginRequest loginRequest){
        logger.info("in this line");
        String username = loginRequest.getUsername();
        String psw = loginRequest.getPassword();
        if(username.equals("admin") && psw.equals("admin")) return String.format("Hello %s!", username);
        return String.format("Invalid!");
    }
}
