function ArticleList({ updateDisplay, filteredArticles }) {
  const articleList = filteredArticles.map((article) => (
      <li className="list aside-article" key={article.id} onClick={() => updateDisplay(article.id)}>
        <div className="article-info">
          <h3 className="aside-title">{article.title}</h3>
          <span>By {article.author_name}</span>
        </div>
        <img className="main-article-image" src={article.image} alt="" />
      </li>
    ));
  return <ul className="article-list">{articleList}</ul>;
}

export default ArticleList;