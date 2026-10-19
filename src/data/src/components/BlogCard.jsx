import React from 'react';

export default function BlogCard({ post }) {
  return (
    <div style={cardStyle}>
      <span style={badgeStyle}>{post.category}</span>
      <h3 style={{ margin: '10px 0', color: '#1e3a8a' }}>{post.title}</h3>
      <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '15px' }}>{post.excerpt}</p>
      <div style={footerStyle}>
        <small style={{ color: '#94a3b8' }}>By {post.author} • {post.date}</small>
      </div>
    </div>
  );
}

const cardStyle = {
  background: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '12px',
  padding: '25px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
  transition: 'transform 0.3s ease',
};

const badgeStyle = {
  background: '#dbeafe',
  color: '#1e3a8a',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.75rem',
  fontWeight: '700',
  textTransform: 'uppercase',
};

const footerStyle = {
  borderTop: '1px solid #f1f5f9',
  paddingTop: '12px',
  marginTop: '15px',
};