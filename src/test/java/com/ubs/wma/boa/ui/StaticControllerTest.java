package com.base.app.ui;

import java.io.File;
import java.nio.file.Files;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class StaticControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testIndexHtml() throws Exception {
        File login = new ClassPathResource("public/index.html").getFile();
        String html = new String(Files.readAllBytes(login.toPath()));

        this.mockMvc.perform(
            get("/index.html")
        ).andExpect(
            status().isOk()
        ).andExpect(
            content().string(html)
        )
        .andDo(
            print()
        );
    }

}
