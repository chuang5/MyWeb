package com.example.server.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController {

    Logger logger = LoggerFactory.getLogger(helloController.class);

    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World") String name) {
        logger.info("in this line");
        return String.format("Hello %s!", name);
    }
}
