import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="project-container">
      <div className="project-container-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="project-container-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
