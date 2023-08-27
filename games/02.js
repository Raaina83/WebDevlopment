const cardArray=[
    {
        name:'c++',
        img: 'c++.png'
    },
    {
        name:'css',
        img:'css.avif'
    },
    {
        name:'html',
        img:'html.png'
    },
    {
        name:'php',
        img:'php.png'
    },
    {
        name:'python',
        img:'pylogo.webp'
    },
    {
        name:'sass',
        img:'sass.png'
    },
    {
        name:'c++',
        img: 'c++.png'
    },
    {
        name:'css',
        img:'css.avif'
    },
    {
        name:'html',
        img:'html.png'
    },
    {
        name:'php',
        img:'php.png'
    },
    {
        name:'python',
        img:'pylogo.webp'
    },
    {
        name:'sass',
        img:'sass.png'
    }
]

cardArray.sort(() => 0.5 -Math.random()); //advance shortcut to randomly sort an array
console.log(cardArray);

let grid=document.querySelector('.grid');
let cardsChosen=[];
let cardsIds=[];

function createBoard(){
    for(let i=0;i<12;i++){
        const img=document.createElement('img');
        img.setAttribute('src','js.png');
        img.setAttribute('id',i);
        img.addEventListener('click',flipCard);
        grid.appendChild(img);
    }
}

function checkMatch(){
    let cards=document.querySelectorAll('img');
    if(cardsChosen[0]===cardsChosen[1]){
        cards[cardsIds[0]].setAttribute('src','white.webp');
        cards[cardsIds[1]].setAttribute('src','white.webp');
        cards[cardsIds[0]].removeEventListener;
        cards[cardsIds[0]].removeEventListener;
    } else{
        cards[cardsIds[0]].setAttribute('src','js.png');
        cards[cardsIds[1]].setAttribute('src','js.png');
    }
    cardsChosen=[];
    cardsIds=[];
}
createBoard();
function flipCard(){
    console.log("clicked");
    let cardId=this.getAttribute('id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    console.log(cardsIds);
    if(cardsChosen.length===2){
        setTimeout(()=>{
            checkMatch();
        },500)
    }
    
}