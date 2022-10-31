import "../../styles/Article.css";
import { useState, useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import AuthorArticle from "./AuthorArticle";

function AuthorArticleList() {
  const [userArticles, setUserArticles] = useState([]);
  const [filter, setFilter] = useState("DRA");

  const handleError = (err) => {
    console.warn(err);
  };

  const getUserArticles = useCallback(async () => {
    const response = await fetch("/api/v1/articles/user/").catch(handleError);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    } else {
      const data = await response.json();
      setUserArticles(data);
    }
  }, []);

  useEffect(() => {
    getUserArticles();
  }, [getUserArticles]);

  const filteredArticles = userArticles
    .filter((article) => (filter ? article.status == filter : article))
    .map((article) => <AuthorArticle key={article.id} article={article} />);

  const changeCategory = (value) => {
    setFilter(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="display">
        <section className="author-buttons">
          <Button
            className="author-button"
            variant="outline-dark"
            value="DRA"
            onClick={(e) => changeCategory(e.target.value)}
          >
            Draft
          </Button>
          <Button
            className="author-button"
            variant="outline-dark"
            value="SUB"
            onClick={(e) => changeCategory(e.target.value)}
          >
            Submitted
          </Button>
        </section>
        <section className="author-article-list margin-section">
          <ul className="list-container">{filteredArticles}</ul>
        </section>
      </div>
    </>
  );
}

export default AuthorArticleList;