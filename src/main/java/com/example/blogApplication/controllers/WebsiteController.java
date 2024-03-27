package com.example.blogApplication.controllers;

import com.example.blogApplication.items.Post;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class WebsiteController {
    ArrayList<Post> blogPosts = new ArrayList<>();

    @GetMapping("homepage")
    public String homepage(Model model) {
        return "homePage";
    }

    @GetMapping("editpage")
    public String editpage(Model model) {
        return "editPage";
    }

    @GetMapping("createpage")
    public String createpage(Model model) {
        return "createPostPage";
    }
}
