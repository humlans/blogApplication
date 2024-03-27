package com.example.blogApplication.items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // includes: @ToString @EqualsAndHashCode @Getter @Setter @RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    private int id;
    private String title;
    private int userId;
    private String textContent;
    private String date;

    public Post(String title, int userId, String textContent, String date){
        this.title = title;
        this.userId = userId;
        this.textContent = textContent;
        this.date = date;
    }
}
