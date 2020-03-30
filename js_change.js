const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const linkHref = document.getElementsByTagName('a');

let oldText = '(765)-001-98-77'; // Old number or word

let newText = '111-11-11'; // New number or word

while (walker.nextNode()) {
  const text = walker.currentNode.textContent.trim();

  if (text.includes(oldText)) {
    walker.currentNode.textContent = walker.currentNode.textContent.replace(oldText, newText);
  }
}

let oldTextHref = 'tel:' + oldText.replace(/[^+\d]/g, '');
let newTextHref = 'tel:' + newText.replace(/[^+\d]/g, '');


for(let i = 0; i < linkHref.length; i++){
  if(linkHref[i].href == 'tel:' + oldText || linkHref[i].href == oldTextHref){
    linkHref[i].href = newTextHref;
  }
}


