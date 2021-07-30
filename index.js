//Queries
const body = document.querySelector('body');
const coderPath = document.querySelector('.coder');
const musicPath = document.querySelector('.music');


//Over coder path
coderPath.addEventListener('mouseover', ()=>{
    body.classList.add('movingCode')
})


coderPath.addEventListener('mouseout', ()=>{
    body.classList.remove('movingCode')
})



//Over music path
musicPath.addEventListener('mouseover', ()=>{
    body.classList.add('movingCode2')
})


musicPath.addEventListener('mouseout', ()=>{
    body.classList.remove('movingCode2')
})