let myBtnChangeColor = document.getElementById("change-color");
let myBtnHello = document.getElementById("hello");
let myBtnGoodbye = document.getElementById("goodbye");
let myContainer = document.getElementById("container");
let myP = document.getElementById("new-color");
let calcular = document.getElementById("calcular");

function generateRandom() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  let newColor = `rgb(${generateRandom()},${generateRandom()},${generateRandom()})`;
  this.style.backgroundColor = newColor;
  myP.innerText = newColor;
}

myBtnChangeColor.addEventListener("click", changeColor);
myBtnHello.addEventListener("click", changeColor);
myBtnGoodbye.addEventListener("click", changeColor);
myContainer.addEventListener("click", changeColor);



calcular.addEventListener('click',
    function(e){
          console.log(e)
        let myInput = document.querySelector('#num1').value; 
        console.log(myInput);
    }
)

window.addEventListener('keydown', function(e){
        console.log(e.key)

    if(e.key == 's'){
        this.alert('podes ir')
    }

})



