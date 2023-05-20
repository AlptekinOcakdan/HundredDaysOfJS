const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", isPalindrome);

function isPalindrome() {
    const word = document.querySelector(".input-text").value;
    const vowelCount = countVowels(word);

    return word === word.split('').reverse().join('')
        ? result.innerHTML = `${word.toUpperCase()} is a palindrome. It has ${vowelCount} vowel(s).`
        : result.innerHTML = `${word.toUpperCase()} is NOT a palindrome. It has ${vowelCount} vowel(s).`;
}

function countVowels(word) {
    //It includes Turkish letters.
    const vowels = ['a', 'e', 'i', 'o', 'u', "ı", "ü", "ö"];
    const lowercaseWord = word.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowercaseWord.length; i++) {
        if (vowels.includes(lowercaseWord[i])) {
            count++;
        }
    }

    return count;
}