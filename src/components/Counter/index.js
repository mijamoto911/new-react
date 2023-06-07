import React, { useState } from "react";

const EmojiList = () => {
  const [emojis, setEmojis] = useState([
    { emoji: "😀", count: 0 },
    { emoji: "😊", count: 0 },
    { emoji: "👍", count: 0 },
    { emoji: "❤️", count: 0 },
  ]);

  const handleEmojiClick = (index) => {
    const updatedEmojis = [...emojis];
    updatedEmojis[index].count += 1;
    setEmojis(updatedEmojis);
  };

  const handleShowResults = () => {
    const winningEmoji = emojis.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    alert(`The winning emoji is: ${winningEmoji.emoji}`);
  };

  return (
    <div>
      <h3 className="title">Emoji List</h3>
      <div>
        {emojis.map((emoji, index) => (
          <span key={index}>
            <span>{emoji.emoji}</span>
            <button onClick={() => handleEmojiClick(index)}>Vote</button>
            <span>{emoji.count}</span>
          </span>
        ))}
      </div>
      <button onClick={handleShowResults}>Show Results</button>
    </div>
  );
};

export default EmojiList;
