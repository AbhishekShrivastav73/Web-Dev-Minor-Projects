let text = 'Hey Im a Front-End Web Developer';
let i = 0;
let element = document.querySelector('#text');

function animation(){
    if (i<text.length){
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(animation, 100);
    }
}
animation();