package com.example.blogApplication.items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // includes: @ToString @EqualsAndHashCode @Getter @Setter @RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
public class BlogPost {
    private String title;
    private String author;
    private int id;
    private String textContent;
    private String date;

    static int nextId = 0;

    public BlogPost(String title, String author, String textContent, String date){
        id = nextId;
        nextId++;
        this.title = title;
        this.author = author;
        this.textContent = textContent;
        this.date = date;
    }
}
