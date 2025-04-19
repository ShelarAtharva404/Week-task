// LikeButton.jsx
import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      style={{
        padding: '10px 20px',
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      ❤️ Like {likes}
    </button>
  );
}

export default LikeButton;
