let btns = document.querySelectorAll('.section')
// let content = document.querySelectorAll('.content');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
        // content.style.display = 'block';
    })
}