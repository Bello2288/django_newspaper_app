function ArticleList({ updateDisplay, articles }) {
  const articleList = articles.map((article) => (
      <li className="list aside-article" key={article.id} onClick={() => updateDisplay(article.id)}>
        <div>
          <h3 >{article.title}</h3>
          <span>By {article.author_name}</span>
        </div>
        <img className="main-article-img" src={article.image} alt="" />
      </li>
    ));
  return <ul className="article-list">{articleList}</ul>;
}

export default ArticleList;