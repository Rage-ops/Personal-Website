import React from "react";
import "../ProjectCard/ProjectCard.css";
import "./Blog.css";

function Blog({ isLoading, posts }) {
  if (isLoading) {
    return (
      <div className="blog-container">
        <h3>loading posts...</h3>
      </div>
    );
  }
  return (
    <div className="blog-container">
      <div className="posts-container">
        {posts.map((post) => {
          const {
            id,
            title,
            description,
            readable_publish_date,
            url,
            type_of,
            tag_list,
          } = post;
          return (
            <div key={id} className="projectcard">
              <div className="flex-container post-header">
                <h2>{title}</h2>
                <h4>{`•${type_of}`}</h4>
              </div>
              <div className="flex-container">
                {tag_list.map((tag, index) => {
                  return <h4 className="tag-item" key={index}>{`#${tag}`}</h4>;
                })}
              </div>
              <h5>{readable_publish_date}</h5>
              <p className="code">
                {description.slice(0, -3)}
                <a href={url}>...Read more</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
