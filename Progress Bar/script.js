const loader = document.querySelector('#loader');

function startLoading(){
    let grow = 0;
    let interval = setInterval(function(){
        if(grow === 100){
            clearInterval(interval);
            grow = 0;
            loader.style.width = '100%';
        }else{
            grow++
            loader.style.width = grow + '%';
        }
    },10);
}