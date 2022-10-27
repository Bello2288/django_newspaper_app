import { useState, useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import AuthorArticleDisplay from "./AuthorArticleDisplay";


function AuthorArticleList() {
  const [userArticles, setUserArticles] = useState([]);
  const [filter, setFilter] = useState("Draft");

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
    .filter((article) => (filter ? article.status === filter : article))
    .map((article) => <AuthorArticleDisplay key={article.id} article={article} />);

  const changeCategory = (value) => {
    setFilter(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="display">
        <section className="buttons-box">
          <Button
            className="buttons"
            variant="primary"
            value="Draft"
            onClick={(e) => changeCategory(e.target.value)}
          >
            Draft
          </Button>
          <Button
            className="buttons"
            variant="primary"
            value="Submitted"
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