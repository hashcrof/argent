//div
const newDiv = document.createElement("div");
// and give it some content
const newContent = document.createTextNode("Hi there and greetings!");
// add the text node to the newly created div
newDiv.appendChild(newContent);
document.getElementById('root').appendChild(newDiv);
const buttons = document.getElementsByTagName('button');

for (let btn of buttons) {
  btn.addEventListener('click', () => {
    newDiv.innerHTML = 'TEST'
  })
}
