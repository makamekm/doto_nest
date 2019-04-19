package com.base.app.ui;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.base.app.ui.Config;

@Controller
public class ConfigController {
    private Config config;

    public ConfigController(Config config) {
        this.config = config;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/config")
    @ResponseBody
    @ConfigurationProperties
    public Config config() {
        return config;
    }
}