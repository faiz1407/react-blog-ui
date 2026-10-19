import React, { useState } from 'react';
import postsData from './data/posts.json';
import BlogCard from './components/BlogCard';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on search query and category
  const filteredPosts = postsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '10px' }}>React Blog UI</h1>
          <p style={{ color: '#64748b' }}>MERN Full Stack Internship - Week 1 Mini Project</p>
        </header>

        {/* Search & Filter Controls */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '12px 18px', width: '300px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.95rem' }}
          />
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: '12px 18px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.95rem', background: 'white' }}
          >
            <option value="All">All Categories</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Frontend">Frontend</option>
          </select>
        </div>

        {/* Blog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#64748b' }}>No articles found matching your criteria.</p>
          )}
        </div>

      </div>
    </div>
  );
}