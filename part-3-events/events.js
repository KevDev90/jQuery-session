// const $ = require('jquery');
let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
})

let btn2 = $("[type='submit']")
btn2.on('click', function(e){
  e.preventDefault()
})

let clearBtn2 = $('#clear-btn');
clearBtn2.on('click', function(e) {
  e.preventDefault()
})

$(document).ready(function() {
 localStorage.setItem("server", input.val());
 var storedValue = localStorage.getItem("server")
 $('input').text(storedValue)
 let clearBtn3 = $('#clear-btn');
 clearBtn2.on('click', function() {
   localStorage.clear()
 })
}


})
console.log($('p').text())
