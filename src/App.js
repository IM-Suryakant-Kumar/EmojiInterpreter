import React, { useState } from "react";
import "./styles.css";

const h1Elem = <h1>inside outttttt</h1>;

export default function App() {
  const [input, setInput] = useState("");
  const emojiWeKnow = {
    "❤️": "Red Heart",
    "🤍": "White Heart",
    "✨": "Sparkles",
    "⭐": "Star",
    "😊": "Smiling Face with Smiling Eyes",
    "😂": "Face with Tears of Joy",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "👀": "Eyes",
    "😉": "Winking Face",
    "😭": "Loudly Crying Face",
    "🤔": "Thinking Face"
  };
  const emojiArr = Object.keys(emojiWeKnow);

  function inputHandler(e) {
    const emoji = e.target.value;

    if (emojiWeKnow[emoji]) {
      setInput(emojiWeKnow[emoji]);
    } else {
      setInput("we do not have this in our database");
    }
  }
  function clickHandler(emoji) {
    setInput(emojiWeKnow[emoji]);
  }

  //-------------------------------------------

  return (
    <div className="App">
      {h1Elem}
      <input
        type="text"
        placeholder="put an emoji 👇 to know the meaning of it"
        onChange={inputHandler}
      />
      <div className="output-elem">{input}</div>
      <div className="emojis-elem">
        {emojiArr.map((item) => (
          <span
            className="emoji-item"
            key={item}
            onClick={() => clickHandler(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
