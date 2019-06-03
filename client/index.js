//div
const newDiv = document.createElement("div");
// and give it some content
const newContent = document.createTextNode("Hi there and greetings!");
// add the text node to the newly created div
newDiv.appendChild(newContent);
document.getElementById('root').appendChild(newDiv);
const buttons = document.getElementsByTagName('button');

let count = 0;
for (let btn of buttons) {
  btn.addEventListener('click', () => {
    count = count + 1;
    newDiv.innerHTML = `TEST ${count}`
  })
}
