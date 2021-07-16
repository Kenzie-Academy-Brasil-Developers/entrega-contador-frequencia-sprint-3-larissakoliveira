const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   contadorletras()
   contadorpalavras()
});

function contadorletras() {
    const letters = document.getElementById("lettersDiv");
    letters.innerHTML = '';
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    // Isto muda todas as letras para minúsculas
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.

    const letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
           letterCounts[currentLetter] = 1; 
        } else { 
           letterCounts[currentLetter]++; 
        }
     }

     for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        let textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        letters.appendChild(span); 
     }    
   }

function contadorpalavras() {
   const words = document.getElementById("wordsDiv");
   words.innerHTML = '';
   let typedWords = document.getElementById("textInput").value;
   typedWords = typedWords.toLowerCase(); 
   typedWords = typedWords.replace(/[^a-z'\s]+/g, ""); 
   typedWords = typedWords.split(' ');
   
   const wordCounts = {}
   for (let i = 0; i < typedWords.length; i++) {
      let currentWord = typedWords[i]
      if (wordCounts[currentWord] === undefined) {  
         wordCounts[currentWord] = 1;
      }else {
         wordCounts[currentWord]++;
      }
   }                 
   
   for (let word in wordCounts) {
      const spanword = document.createElement('span');
      spanword.innerHTML = word + ': ' + wordCounts[word] + ', ';
      words.appendChild(spanword);
   }  
}


