const myTitle = 'A Poem'
let myObject = {'adjectives': ['foggy', 'radiant', 'boreal','bleak'], 'nouns': ['shadow', 'snow', 'tree', 'blade of darkness'], 
'verbs': ['glistening','howling','gushing','murmuring','spearing']}
let myArticleArray = ['The', 'an', 'a','before','within','while','in']

// function returnPoem(title, article, noun, adjective) {
//   return title + ': ' + article + ' ' + adjective + ' ' + noun
// }

// W(returnPoem(myTitle, myArticleArray[0], myObject.adjectives[0],myObject.nouns[0], myObject.verbs[0]))

function forLoopPoem(title, articles, nouns, adjectives,verbs) {
  var wholePoem = ''
  wholePoem += title + '\n'
  for (i = 0; i < 4; i++) {
    sentences = getRandomItem(myArticleArray) + ' ' + getRandomItem(myObject.adjectives) + ' ' + getRandomItem(myObject.nouns) + ' ' + getRandomItem(myObject.verbs)
    wholePoem += sentences + '\n'
  }
  return wholePoem
}

const wholePoem = forLoopPoem(myTitle, myArticleArray, myObject.nouns, myObject.adjectives, myObject.verbs)
typeWriter(wholePoem)


//code originally cited from https://www.w3schools.com/howto/howto_js_typewriter.asp, but mine is the improved version
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



// while loop poem: this has same effect as for loop
// let counter = 0
// W(myTitle)
// while(counter < 5) {
//   W(getRandomItem(myArticleArray) + ' ' + getRandomItem(myObject.adjectives) + ' ' + getRandomItem(myObject.nouns) + ' ' + 
//   getRandomItem(myObject.verbs))
//   counter++
// }

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

  return array[Math.floor(Math.random()*array.length)]
}


