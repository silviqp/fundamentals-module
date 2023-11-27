function dictionary (arr){
    
        class Term {
            constructor(word, definition) {
                this.word = word;
                this.definition = definition;
            }
        }
     
       let words = [];
        let definitions = [];
        
        for (let line of arr) {
            let currentTerm = JSON.parse(line);
            let currentWord = Object.keys(currentTerm)[0];
            let currentDefinition = Object.values(currentTerm)[0];
            
            let termIndex = words.indexOf(currentWord);
            if (termIndex > -1) {
                definitions[termIndex] = currentDefinition;
            } else {
                words.push(currentWord);
                definitions.push(currentDefinition);
            }
        }
        
        let terms = [];
     
        for (let i = 0; i < words.length; i++) {
            terms.push(new Term(words[i], definitions[i]));
        }
     
        terms.sort((a, b) => a.word.localeCompare(b.word)).forEach(term => {
            console.log(`Term: ${term.word} => Definition: ${term.definition}`);
        })
    }



dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ])