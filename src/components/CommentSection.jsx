import React, { useState } from 'react';
import '../App.css';

export default function CommentSection() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newComment = { name, comment };
    setCommentsList([newComment, ...commentsList]);

    setName('');
    setComment('');
  };

  return (
    <section id="comments" className="section">
      <h2 className="section-title">Send Us Your Wishes</h2>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>

      <div className="comments-list">
        {commentsList.map((c, idx) => (
          <div key={idx} className="comment">
            <strong>{c.name}</strong>: {c.comment}
          </div>
        ))}
      </div>
    </section>
  );
}
