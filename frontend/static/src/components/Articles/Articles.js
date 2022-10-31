import "../../styles/Article.css";
import { useState, useCallback, useEffect } from "react";
import ArticleDisplay from "./ArticleDisplay";
import ArticleList from "./ArticleList";
import Button from "react-bootstrap/Button";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState();
  const [filter, setFilter] = useState("HK");

  const handleError = (err) => {
    console.warn(err);
  };

  const getArticles = useCallback(async () => {
    const response = await fetch("/api/v1/articles/").catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setArticles(data);
      setActiveArticle(data[0]);
    }
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const updateDisplay = (id) => {
    const index = articles.findIndex((article) => article.id === id);
    const articleAtIndex = articles[index];
    setActiveArticle(articleAtIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredArticles = articles.filter((article) =>
    filter ? article.category == filter : article
  );

  const changeCategory = (value) => {
    setFilter(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setActiveArticle(filteredArticles[0]);
  }, [filter]);

  return (
    <div className="display">
      <section className="sort-buttons">
        <Button
          className="sort-button"
          variant="primary"
          value="FB"
          onClick={(e) => changeCategory(e.target.value)}
        >
          Football
        </Button>
        <Button
          className="sort-button"
          variant="primary"
          value="HK"
          onClick={(e) => changeCategory(e.target.value)}
        >
          Hockey
        </Button>
        <Button
          className="sort-button"
          variant="primary"
          value="BS"
          onClick={(e) => changeCategory(e.target.value)}
        >
          Baseball
        </Button>
        <Button
          className="sort-button"
          variant="primary"
          value="BK"
          onClick={(e) => changeCategory(e.target.value)}
        >
          Basketball
        </Button>
      </section>
      <section className="main-display">
        {activeArticle && <ArticleDisplay activeArticle={activeArticle} />}
        <aside className="sidebar">
          <ArticleList
            articles={articles}
            updateDisplay={updateDisplay}
            filteredArticles={filteredArticles}
          />
        </aside>
      </section>
    </div>
  );
}

export default Articles;