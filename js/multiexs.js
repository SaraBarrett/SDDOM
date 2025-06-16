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

let myFormG = document.getElementById('myShoppingList');

myFormG.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(this);

  const li = document.createElement('li');
  const myUl = document.querySelector('ul');
  li.innerText = formData.get('product') + '-' + formData.get('qt');
  myUl.appendChild(li)


  myFormG.reset()




})



