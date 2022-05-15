// const art = document.querySelector("..All");

document.querySelector('.container').classList.add('hidden')
document.querySelector('.sec-3').classList.add('hidden')
document.querySelector('.back').classList.add('hidden')
document.querySelector('.mahaSec').classList.add('hidden')
document.querySelector('.mahaSec').classList.add('hidden')



const dattab = ["ecosport", "LCD writting tablet", "lays chips", "eraser", "tiger", "I phone 13", "book", "pencil","sticky tape", "kids piano", "scale", "dress", "help", "hospital", "rubber band"];

for (let i = 0; i < 15; i++) {
  document.querySelector(`.all${i}`).addEventListener('click', function (e) {
    e.preventDefault()
    let headers = document.querySelector('header');
   headers.classList.add('hidden')
 
   let items = document.querySelector('.sec-1');
   items.classList.add('hidden')
 
   document.querySelector('.container').classList.remove('hidden')
   document.querySelector('.sec-3').classList.remove('hidden')
   document.querySelector('.back').classList.remove('hidden')
   document.getElementById('massage').value = dattab[i];
  })
}

