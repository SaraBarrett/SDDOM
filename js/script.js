const mySpan = document.getElementById("History");
console.log(mySpan);

mySpan.innerText = "História";

// const myDivs = document.getElementsByTagName('div');
// console.log(myDivs)

// const myDivsQ = document.querySelectorAll('div');
// console.log(myDivsQ)


let myLis = document.querySelectorAll('.toclevel-1');

for(let li of myLis){
    //adiciona
    li.classList.add('classListTest')

    //remove
    li.classList.remove('toclevel-1')

    //verificar se tem
    console.log(li.classList.contains('toclevel-1'))

}
