package com.newstradingapp.authenticationservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    
    // Forward all routes to index.html for client-side routing
    @GetMapping(value = {"/", "/login", "/register"})
    public String forward() {
        return "forward:/index.html";
    }
}
