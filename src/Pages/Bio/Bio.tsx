import React from 'react';
import './Bio.css';

let words = document.querySelectorAll(".word");
words.forEach(word => {
  let content = word.textContent!;
  let letters = content.split("");
  word.textContent = "";
  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
(words[currentWordIndex] as HTMLElement).style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  (nextWord as HTMLElement).style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);

// Rotating Text found in https://blog.hubspot.com/website/css-animation-examples
const Bio = () => {
  return (
    <div className="Bio">
      <div className="rotating-text">
        <p>Andrew Strimaitis is a </p>
        <p>
          <span className="word alizarin">software engineer</span>
          <span className="word wisteria">finanical investor</span>
          <span className="word emerald">tennis player</span>
          <span className="word peter-river">avid reader</span>
          <span className="word sun-flower">world traveler</span>
        </p>
      </div>
    </div>
  ); 
}

export default Bio;