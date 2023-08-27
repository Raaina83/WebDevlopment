let input = document.createElement('input');
input.getAttribute('placeholder');
input.setAttribute('placeholder', 'username');
document.querySelector('body').append(input);

let btn = document.createElement('button');
btn.innerText = "Click Me";
document.querySelector('body').append(btn);
btn.getAttribute('id');
btn.setAttribute('id', 'btn');

let p = document.createElement('p');
p.innerHTML = "Apna College <b> Delta</b> Practice";
document.querySelector('body').prepend(p);

let h1 = document.createElement('h1');
h1.innerHTML = "<u> DOM Practice <u>";
h1.style.color = 'purple';
document.querySelector('body').prepend(h1);