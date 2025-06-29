import React, { useState } from 'react';
import '../App.css';

export default function CommentSection() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message: comment })
      });

      const data = await res.json();

      if (data.success) {
        const newComment = {
          name: data.received.name,
          comment: data.received.message
        };
        setCommentsList([newComment, ...commentsList]);
        setName('');
        setComment('');
      }
    } catch (error) {
      console.error('Failed to send comment:', error);
    } finally {
      setLoading(false);
    }
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
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
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
