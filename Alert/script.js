let alerts = [
    {type : 'Danger', message : 'Indiactes a dangerous problem or potentially negative action.', color : '#F66358'},
    {type : 'Success', message : 'Indiactes a successful or positive action.', color : '#2EB886'},
    {type : 'Info', message : 'Indiactes a neutral informative change or action.', color : '#46A8F5'},
    {type : 'Warning', message : 'Indiactes a warning that might need attention.', color : '#FFA92B'},
  
];

let container = document.querySelector('.alertContainer');
let btns = document.querySelector('.btns')



btns.addEventListener('click',function(e){
    console.log(e.target.id);
    console.log(alerts[0].type);
    alerts.forEach(function(a){
        if(e.target.id == a.type){
        let alert = document.createElement('div');
        alert.classList.add('alerts');
        alert.style.backgroundColor = a.color;
        alert.innerHTML =  `<h2><b>${a.type}</b> ${a.message}</h2> &times;`
        container.appendChild(alert);
        setInterval(()=>{
            alert.remove();
        },4000)
    }
    });
    // let alert = document.createElement('div');
    // alert.classList.add('alerts');
    // alert.innerHTML =  `<h2><b>Danger!</b> Indicates a dangerous or potentially negative action.</h2> &times;`
    // container.appendChild(alert);
    // setInterval(()=>{
    //     alert.remove();
    // },4000)
})

