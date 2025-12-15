import { useState } from 'react';
import { articles } from '../data/articles';
import ArticleDetail from '../components/ArticleDetail';

export default function Learn() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showArticleDetail, setShowArticleDetail] = useState(false);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowArticleDetail(true);
  };

  const handleCloseArticle = () => {
    setShowArticleDetail(false);
    setSelectedArticle(null);
  };

  return (
    <div className="page learn-page">
      <div className="learn-header">
        <h1 className="learn-title">📚 Learn</h1>
        <p className="learn-subtitle">Build your cooking techniques from beginner to expert</p>
        <p className="learn-description">Articles on cooking tips, techniques, and science from expert chefs</p>
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="article-card"
            onClick={() => handleArticleClick(article)}
          >
            <div className="article-image">
              <div className="article-image-emoji">{article.image}</div>
            </div>
            
            <div className="article-info">
              <div className="article-header">
                <h3 className="article-title">{article.title}</h3>
              </div>
              
              <p className="article-author-name">By {article.author}</p>
              
              <p className="article-card-description">{article.description}</p>
              
              <div className="article-footer">
                <span className="article-read-time-badge">⏱️ {article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showArticleDetail && selectedArticle && (
        <ArticleDetail 
          article={selectedArticle}
          onClose={handleCloseArticle}
        />
      )}
    </div>
  );
}
