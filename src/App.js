import { useState } from "react";
import "./styles.css";

var color = "#991B1B";
const emojiCollection = {
  "👋": "Waving Hand",
  "✋": "Raised Hand",
  "👌": "OK Hand",
  "✌️️": "Victory Hand",
  "🤙": "Call Me Hand",
  "👊": "Oncoming Fist",
  "🙏": "Folded Hands",
  "🤝": "Handshake",
  "👍": "Thumps Up",
  "👎": "Thumps Down"
};

var currentEmojiList = Object.keys(emojiCollection);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiCollection[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji, soon we will add it to our database";
    }
    setMeaning(meaning);
  }

  function emojiClick(emoji) {
    var meaning = emojiCollection[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>Emoji Interpreter</h1>
      <h3>Interpreter for Hand Gestures</h3>
      <input
        placeholder="Put an emoji here to know its meaning"
        onChange={inputHandler}
      ></input>
      <h2> {meaning}</h2>
      <h3>Emojis we know</h3>
      {currentEmojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
