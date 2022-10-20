import { useState, useCallback, useEffect } from "react";
import ArticleDisplay from "./ArticleDisplay";
import ArticleList from "./ArticleList";
import Button from 'react-bootstrap/Button';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState();
  const [filter, setFilter] = useState("GENERAL");

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
  };

  return (
    <div>
      <Button variant="outline-dark" value='GENERAL' onClick={(e) => setFilter(e.target.value)}>
            General
      </Button>
      <Button variant="outline-dark" value='FOOTBALL' onClick={(e) => setFilter(e.target.value)}>
            Football
      </Button>
      <Button variant="outline-dark" value='HOCKEY' onClick={(e) => setFilter(e.target.value)}>
            Hockey
      </Button>
      <Button variant="outline-dark" value='BASEBALL' onClick={(e) => setFilter(e.target.value)}>
            Baseball
      </Button>
      <Button variant="outline-dark" value='BASKETBALL' onClick={(e) => setFilter(e.target.value)}>
            Basketball
      </Button>
      <aside>
        <ArticleList articles={articles} updateDisplay={updateDisplay} filter={filter}/>
      </aside>
      {activeArticle && <ArticleDisplay activeArticle={activeArticle} />}
    </div>
  );
}

export default Articles;