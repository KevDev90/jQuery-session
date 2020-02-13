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

$(document).ready(function() {
  $("[type = 'submit']").text('Add New Buddy')
  $("[for= 'confirm']").text('Yes!!!')
  $("[for= 'deny']").text('No!!!')
  $('input').val('string')
  $('h1, h2').text('Contact Form')

})

console.log($('p').text())
