const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this);
  e.stopPropagation(); //stops bubbling up propagation, only the grandchild element is fired
}

divs.forEach(div => div.addEventListener('click', logText, {
  // capture: true //Captures event top down, unlike bubbling them bottom up(by default capture is set false)
}));

button.addEventListener('click', logText, {
  once: true //It will listen for one click and then unbinds itself from the Event Listener
  //unbinding stands for button.removeEventListener('click', logText)
});
