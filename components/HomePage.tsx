import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const posts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
    { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' },
  ];

  return (
    <div>
      <h1>Twitterson</h1>
      <p>O Twitter só que melhor</p>
      
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;