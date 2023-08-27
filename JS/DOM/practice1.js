let para = document.createElement('p');
para.innerText = "Hi,I'm red!";
document.querySelector('body').append(para);
para.classList.add('red');

let head = document.createElement('h3');
head.innerText = "Hi,I'm blue h3!";
document.querySelector('body').append(head);
head.classList.add('blue');

let box = document.createElement('div');
box.innerText = "Hi,I'm a div!";
document.querySelector('body').append(box);
box.classList.add('box');

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
box.appendChild(h1);

let p = document.createElement('p');
p.innerText = "ME TOO!";
box.appendChild(p);