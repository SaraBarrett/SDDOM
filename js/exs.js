// let img = document.getElementById('unicorn');
// let myH1= document.getElementById('mainheading');
// if(img){
//     console.log(img)
// }

// console.log(myH1)



// let doneTodos = document.querySelectorAll('.done');
// const checkBox = document.querySelector("input[type='checkbox']")
// console.log(doneTodos)
// console.log(checkBox)'

function changeTaste(){
    let mySpan = document.querySelector('span');
    mySpan.innerText = 'Yack'
}

function eggOrChicken(){
    let myImg = document.querySelector('img');

   if(myImg.getAttribute('src') =='https://devsprouthosting.com/images/chicken.jpg'){
        myImg.setAttribute('src', 'https://devsprouthosting.com/images/egg.jpg')
   }else{
        myImg.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
   } 



}

function changeLayout(){
     let myDiv = document.getElementById('container');
     myDiv.style.textAlign = 'center';
     
     let myImg = document.querySelector('img');
     myImg.style.width = '150px';
     myImg.style.borderRadius = '50%'
}


let spans = document.querySelectorAll('span');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let counter = 0;
for(let element of spans){
    element.style.color = colors[counter]
     counter++
}

// spans.forEach((element, index) => {
//      element.style.color = colors[index] 
// })