import React from 'react';

export default function ArticleDetail({ article, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content article-modal" onClick={(e) => e.stopPropagation()}>
        <div className="article-modal-header">
          <div className="article-modal-title-section">
            <h1 className="article-modal-title">{article.title}</h1>
            <div className="article-meta">
              <span className="article-author">By {article.author}</span>
              <span className="article-read-time">{article.readTime}</span>
            </div>
          </div>
          
          <div className="article-controls">
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>
        </div>

        <div className="article-content-scroll">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {article.videoUrl && (
            <div className="article-video-section">
              <h3>Video Tutorial</h3>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="400"
                  src={article.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
