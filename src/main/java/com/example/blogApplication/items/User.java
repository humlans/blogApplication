package com.example.blogApplication.items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor //Behövs dessa två?
@NoArgsConstructor
public class User {
    private int id;
    private String userName;
    private int age;
    private String email;
    private String password;
    private List<Post> postList;

    public boolean logIn(String username, String password) {
        return false;
    }

    public User(String userName, int age, String email, String password, List<Post> postList) {
        this.userName = userName;
        this.age = age;
        this.email = email;
        this.password = password;
        this.postList = postList;
    }
}
