//Takes in a sentence and returns a count of each of the letters in the sentence

const countLetters = function(words) {
  const results = {};

  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      continue;

    }
    if (results[words[i]]) {
      results[words[i]] = results[words[i]] + 1;
      
    } else {
      results[words[i]] = 1;

    }
  
  }
  return results;
};

module.exports =  countLetters;