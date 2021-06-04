package com.example.server.payload;

import javax.validation.constraints.NotBlank;

public class LoadUserRequest {
    @NotBlank
    private String token;


    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString(){
        return "[LoadUserRequest] token=" + token;
    }
}
