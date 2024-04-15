let text = [
    { content :  'Abhishek'},
    { content :  'a Front-End Web Developer'},
    { content :  'a back-end Developer'},
];
let i = 0;
let element = document.querySelector('#text');
let a = 0;

function animation() {
    if (i < text.length) {
        if (a < text[i].content.length) {
            if (a === 0) {
                element.innerHTML = '';
            }
            element.innerHTML += text[i].content.charAt(a);
            a++;
        } else {
            i++;
            a = 0;
        }
        setTimeout(animation, 100);
    }
}
animation();
// setInterval(animation(), 40);