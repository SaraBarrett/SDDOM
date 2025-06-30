// let myBtnChangeColor = document.getElementById("change-color");
// let myBtnHello = document.getElementById("hello");
// let myBtnGoodbye = document.getElementById("goodbye");
// let myContainer = document.getElementById("container");
// let myP = document.getElementById("new-color");
// let calcular = document.getElementById("calcular");
// let myForm = document.querySelector('form');

// function generateRandom() {
//   return Math.floor(Math.random() * 256);
// }

// function changeColor() {
//   let newColor = `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`;
//   this.style.backgroundColor = newColor;
//   myP.innerText = newColor;
// }

// calcular.addEventListener('click',
//     function(e){
//           console.log(e)
//         let myInput = document.querySelector('#num1').value;
//         console.log(myInput);
//     }
// )

// // window.addEventListener('keydown', function(e){
// //         console.log(e.key)

// //     if(e.key == 's'){
// //         this.alert('podes ir')
// //     }

// // })

// document.addEventListener('keydown', function(e){
//    if(e.code == 'ArrowUp'){
//     alert('cucu')
//    }
// })

// myBtnChangeColor.addEventListener("click", changeColor);
// myBtnHello.addEventListener("click", changeColor);
// myBtnGoodbye.addEventListener("click", changeColor);
// myContainer.addEventListener("click", changeColor);

// myForm.addEventListener('submit', function(e){
//   e.preventDefault()
//   console.log('cucu, faz validações e coisas de ui/ux, nomeadamente bloquear o botão');

//   const animalVal = document.querySelector('#animal').value;
//   const myList = document.querySelector('#zoo-animals');
//   const myLi = document.createElement('li');
//   myLi.textContent = animalVal;

//   myList.appendChild(myLi)

//   myForm.reset();
//   //esperamos que o servidor nos dê ok que recebeu os dados
//   //myForm.submit();
// })

// let myFormG = document.getElementById('myShoppingList');

// myFormG.addEventListener('submit', function(e){
//   e.preventDefault();
//   const formData = new FormData(this);

//   const li = document.createElement('li');
//   const myUl = document.querySelector('ul');
//   li.innerText = formData.get('product') + '-' + formData.get('qt');
//   myUl.appendChild(li)

//   myFormG.reset()

// })

// let myDiv = document.querySelector("div");
// console.log(myDiv);

// myDiv.addEventListener("click", function (e) {
//       e.stopPropagation();
//   if (e.target.tagName === "BUTTON" && e.target.id == "cucu") {

//     alert("clicado botão!");
//   }
//   console.log(e.target);
// });

//função que faz a consulta À Api, traz o resultado em json e tranforma de forma a que o JS consiga interpretar
const loadTVShow = async() => {
  const result = await fetch('https://api.tvmaze.com/singlesearch/shows?q=friends');
  const data = await result.json();

  return data;
} 

//função que constrói com o resultado da api (quando ele chegar) o html
const getData = async() => {
  const result = await loadTVShow();
  
  //console log ou criar elementos, etc
  console.log(result)
}

getData();




