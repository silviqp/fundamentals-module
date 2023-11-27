// function wordTracker (arr){
//     //taking the searced words with shift()
//      let searched = arr.shift().split(' ')
//      //making object which keys are the searced words and the values are times that word occures in the input

//      let ocuurances = {};

//      // itearating searched and adding them to the object

//      for(let word of searched){
//         ocuurances[word]=0;
//      }
// //iterating the input 
// for (let word of arr){
//     //if word is searched 
//     if (word in ocuurances){
//         // we ascend the count of the searched word
//         ocuurances[word]++
//     }
// }
// // taking the entries so we can iterate and sort the occurances count in descending order

// let entries = Object.entries(ocuurances).sort((a,b)=>b[1]-a[1])

// // iterating the entries 
// for (let [word,count] of entries){
//     console.log(`${word} - ${count}`);
// }

// }
function function countWordOccurrences(wordList) {
    // Extract the words to find from the first element of the array
    const wordsToFind = wordList[0].split(' ');
    
    // Create an object to store word counts
    const wordCounts = {};
    
    // Loop through the remaining elements of the array
    for (let i = 1; i < wordList.length; i++) {
      const wordsInSentence = wordList[i].split(' ');
      for (const word of wordsInSentence) {
        if (wordsToFind.includes(word)) {
          // Increment the count for the word in the wordCounts object
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      }
    }
    
    // Convert the word counts into an array of objects
    const wordCountArray = [];
    for (const word in wordCounts) {
      wordCountArray.push({ word, count: wordCounts[word] });
    }
    
    // Sort the array by count in descending order
    wordCountArray.sort((a, b) => b.count - a.count);
    
    // Print the word counts
    for (const item of wordCountArray) {
      console.log(`${item.word}: ${item.count}`);
    }
  }
  
  // Example usage:
  const wordList = ["apple banana cherry", "apple orange banana", "cherry apple banana"];
  countWordOccurrences(wordList);(wordList) {
    // Extract the words to find from the first element of the array
    const wordsToFind = wordList[0].split(' ');
    
    // Create an object to store word counts
    const wordCounts = {};
    
    // Loop through the remaining elements of the array
    for (let i = 1; i < wordList.length; i++) {
      const wordsInSentence = wordList[i].split(' ');
      for (const word of wordsInSentence) {
        if (wordsToFind.includes(word)) {
          // Increment the count for the word in the wordCounts object
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      }
    }
    
    // Convert the word counts into an array of objects
    const wordCountArray = [];
    for (const word in wordCounts) {
      wordCountArray.push({ word, count: wordCounts[word] });
    }
    
    // Sort the array by count in descending order
    wordCountArray.sort((a, b) => b.count - a.count);
    
    // Print the word counts
    for (const item of wordCountArray) {
      console.log(`${item.word}: ${item.count}`);
    }
  }
  
  // Example usage:
  const wordList = ["apple banana cherry", "apple orange banana", "cherry apple banana"];
  countWordOccurrences(wordList);
wordTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])