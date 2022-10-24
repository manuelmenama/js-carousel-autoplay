const imgArray = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];


let imgStamp = '';
let miniatureStamp = '';

let timeoutValue = 3;
let timedButton;

const imgContainer = document.querySelector('.img-container');
const imgPreview = document.querySelector('.img-prewiev');


//assegno ad una costante gli elementi freccia
const upArrow = document.querySelector('.arrow.up');
const downArrow = document.querySelector('.arrow.down');

//creo dinamicamente le mie immagini e il nav dell'album
for(let i = 0; i < imgArray.length; i++){
  imgStamp += `<img class="img-displayed" src="img/${imgArray[i]}" alt="${imgArray[i]}">`;
  console.log(imgStamp);
  miniatureStamp += `<img class="miniature" src="img/${imgArray[i]}" alt="${imgArray[i]}">`;
}
//assegno all'elemento contenitore i tag che finiranno nell'html
imgContainer.innerHTML += imgStamp;
imgPreview.innerHTML += miniatureStamp;

//il contatore di interazioni parte da 0
let counterImg = 0;

//assegno ad una costante gli elementi img del mio html
const imgDisplayed = document.getElementsByClassName('img-displayed');
const miniature = document.getElementsByClassName('miniature');

//di default assegno la classe active ai miei primi elementi
imgDisplayed[counterImg].classList.add('active');
miniature[counterImg].classList.add('active');


console.log(upArrow, downArrow);


//alla pressione della freccia in basso scorro in avanti i mie elementi
downArrow.addEventListener('click', goForwardArrow);

//alla pressione della freccia in su scorro in indietro i mie elementi
upArrow.addEventListener('click', goReverseArrow);

timedCaurosel();

imgDisplayed[counterImg].addEventListener('mouseover', mouseOverEffect);


function mouseOutEffect() {
  console.log(this)
  timedCaurosel();
}

function mouseOverEffect() {
  console.log(this)
  clearInterval(timedButton);
}

function timedCaurosel() {
  timedButton = setInterval(automaticForward, timeoutValue * 1000)
}

function automaticForward() {
  if(counterImg === imgArray.length - 1){
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg = 0;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }else{
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg++;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }
  imgDisplayed[counterImg].addEventListener('mouseover', mouseOverEffect);
  imgDisplayed[counterImg].addEventListener('mouseout', mouseOutEffect);
}

function goReverseArrow() {
  if(counterImg === 0){
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg = imgArray.length - 1;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }else{
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg--;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }
}

function goForwardArrow() {
  if(counterImg === imgArray.length - 1){
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg = 0;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }else{
    imgDisplayed[counterImg].classList.remove('active');
    miniature[counterImg].classList.remove('active');
    counterImg++;
    imgDisplayed[counterImg].classList.add('active');
    miniature[counterImg].classList.add('active');
  }
}

