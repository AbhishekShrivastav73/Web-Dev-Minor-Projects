let buttons = document.querySelectorAll('button');
let tabs = document.querySelectorAll('.tab-pane');

console.log(buttons);
console.log(tabs);

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', function(){
        console.log(this);
        for (let i = 0; i < buttons.length; i++) {
            tabs[i].classList.remove('active');
        }
        tabs[index].classList.add('active');
    })
    
}   