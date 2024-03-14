const loginBtn = document.querySelector('#loginBtn')
const cancelBtn = document.querySelector('#cancelBtn')
const overlay = document.querySelector('.overlay')

loginBtn.addEventListener('click', function(){
    overlay.style.display = 'flex'
})
cancelBtn.addEventListener('click', function(){
    overlay.style.display = 'none'
})