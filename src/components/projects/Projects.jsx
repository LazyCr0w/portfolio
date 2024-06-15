import React, { useState, useEffect } from "react";
import Article from "../article/Article";
import "./Projects.css";
import { db } from "../../firebase";
import { collection, getDocs, query } from "firebase/firestore";

const Projects = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const articlesRef = collection(db, "articles");

    const getArticles = async () => {
      const q = query(articlesRef);
      const querySnapshot = await getDocs(q);
      const fetchedArticles = [];
      querySnapshot.forEach((doc) => {
        fetchedArticles.push(doc.data());
      });
      setArticles(fetchedArticles);
      setIsLoading(false);
    };
    getArticles();
  }, []);

  return (
    <div className="gpt3__blog section__padding" id="projects">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">My Projects</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          {isLoading ? (
            <p> Loading Projects </p>
          ) : (
            articles.map((article) => (
              <Article
                key={article.id}
                date={article.date}
                imgUrl={article.imgUrl}
                title={article.title}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
