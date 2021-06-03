package com.example.server.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user", uniqueConstraints = {
    @UniqueConstraint(columnNames = "username")
})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uId;
    @NotNull
    private String username;
    @NotNull
    @JsonIgnore
    private String password;
    @NotNull
    private String token;

    public User(){}

    public User(@NotNull String username, @NotNull String password, @NotNull String token){
        this.username = username;
        this.password = password;
        this.token = token;
    }

    public Long getUId() {
        return this.uId;
    }

    public void setUId(Long uId) {
        this.uId = uId;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return this.token;
    }

    public void setToekn(String token){
        this.token = token;
    }

}
