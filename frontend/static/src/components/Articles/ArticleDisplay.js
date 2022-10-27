function ArticleDisplay({ activeArticle }) {
    return (
      <article className="article-article">
        <img className="article-img" src={activeArticle.image} alt="" />
        <h2 className="article-title">{activeArticle.title}</h2>
        <p className="article-body">{activeArticle.body}</p>
      </article>
    );
  }
  
  export default ArticleDisplay;