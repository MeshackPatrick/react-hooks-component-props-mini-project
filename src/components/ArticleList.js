import React from "react";
import Article from "./Article";

const ArticleList=({post})=>{
    return(
        <main>
            <Article
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
            />

        </main>
    )
}
export default ArticleList