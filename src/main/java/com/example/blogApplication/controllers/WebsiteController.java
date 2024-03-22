package com.example.blogApplication.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebsiteController {

    @GetMapping("homepage")
    public String homepage(Model model){
        return "homePage";
    }
}
