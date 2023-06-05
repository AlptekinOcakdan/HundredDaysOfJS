const input = document.querySelector(".input");
const character = document.querySelector(".character");
const word = document.querySelector(".word");
const readingTime = document.querySelector(".reading-time");
const wordLimit = document.querySelector(".word-limit");
const WORD_LIMIT = 10;

input.addEventListener("input", updateCounts);
input.addEventListener("keydown", checkWordLimit);

function updateCounts() {
    const inputText = input.value;
    const inputLength = inputText.length;
    const words = inputText.match(/\b[-?(\w+)?]+\b/gi);
    const wordCount = words ? words.length : 0;
    const remainingWords = WORD_LIMIT - wordCount;

    character.textContent = inputLength.toString();
    word.textContent = wordCount.toString();
    wordLimit.textContent = remainingWords >= 0 ? remainingWords.toString() : 0;

    // Reading time based on 225 words/min
    const readingSeconds = Math.floor((wordCount * 60) / 225);
    const readingMinutes = Math.floor(readingSeconds / 60);
    const seconds = readingSeconds - readingMinutes * 60;
    readingTime.textContent =
        readingMinutes > 0 ? `${readingMinutes}m ${seconds}s` : `${seconds}s`;
}

function checkWordLimit(e) {
  const words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  const wordCount = words ? words.length : 0;

  if (wordCount >= WORD_LIMIT && e.code !== "Backspace" && !isSpaceKey(e) && !isLastWord(e)) {
    e.preventDefault();
  }
}

function isLastWord(e) {
  const inputValue = input.value;
  const lastSpaceIndex = inputValue.lastIndexOf(" ");
  const lastWord = inputValue.substring(lastSpaceIndex + 1);
  return lastWord.length >= 1 && !isSpaceKey(e);
}


function isSpaceKey(e) {
    return e.code === "Space" || e.keyCode === 32;
}


