const myTitle = 'A Poem'
let myObject = { 'nouns': ['red riding hood', 'cheshire cat', 'blood stained key', 'blue beard','red apple','heel and toe','waxen wings','shining hedge maze','red shoes',
'dead bride','gingerbread house'], 
'verbs': ['grinning','running','raging','murmuring','decaying','cut off','melting','dancing','burning']}
let myArticleArray = ['The']

// function returnPoem(title, article, noun, adjective) {
//   return title + ': ' + article + ' ' + noun
// }

// W(returnPoem(myTitle, myArticleArray[0],myObject.nouns[0], myObject.verbs[0]))

function forLoopPoem(title, articles, nouns ,verbs) {
  var wholePoem = ''
  wholePoem += title + '\n'
  for (i = 0; i < 6; i++) {
    sentences = getRandomItem(myArticleArray) + ' ' + getRandomItem(myObject.nouns) + ' ' + getRandomItem(myObject.verbs)
    wholePoem += sentences + '\n'
  }
  return wholePoem
}

const wholePoem = forLoopPoem(myTitle, myArticleArray, myObject.nouns, myObject.verbs)
typeWriter(wholePoem)


//code originally cited from https://www.w3schools.com/howto/howto_js_typewriter.asp, but mine is the modified version
function typeWriter(sentence) {
  let i = -1;
  const speed = 50; /* The speed/duration of the effect in milliseconds */

  function type() {
    if (i < sentence.length) {
      document.getElementById("typewriter").innerHTML += sentence.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

function changeColor() {
  document.getElementById("typewriter").style.color = randomColors();
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


// while loop poem: this has same effect as for loop
// let counter = 0
// W(myTitle)
// while(counter < 5) {
//   W(getRandomItem(myArticleArray) + ' '  + getRandomItem(myObject.nouns) + ' ' + 
//   getRandomItem(myObject.verbs))
//   counter++
// }

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

  return array[Math.floor(Math.random()*array.length)]
}


