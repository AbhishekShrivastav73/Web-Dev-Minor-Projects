const data = [
    {section : 'Front-end development'},
    {section : 'Back-end development'},
    {section : 'Full Stack development'},
    {section : 'Full Stack development'},
    {section : 'ReactJs'},
    {section : 'Front-end development'},
];

let container = document.querySelector('.container');
let filter = document.querySelector('.filters');

let clutter = '';

data.forEach(function(elem){
    clutter += `<div class="elems">
    <h1>${elem.section}</h1>
</div>`
});

container.innerHTML = clutter;

filter.addEventListener('click',function(e){
    console.log(e.target.id);
    if(e.target.id === 'all'){
        container.innerHTML = clutter;
    }else if(e.target.id === 'frontEnd'){
       let filtered = '';
       let match =  data.filter(function(elem){
           return elem.section === 'Front-end development';
       })

       match.forEach((items)=>{
           filtered+= `<div class="elems">
           <h1>${items.section}</h1>
       </div>`
       })
       
       container.innerHTML = filtered;
    }else if(e.target.id === 'backEnd'){
        let filtered = '';
        let match =  data.filter(function(elem){
            return elem.section === 'Back-end development';
        })
        
        match.forEach((items)=>{
            filtered+= `<div class="elems">
            <h1>${items.section}</h1>
        </div>`})
        
        container.innerHTML = filtered;
    }else if(e.target.id === 'fullStack'){
        let filtered = '';
        let match =  data.filter(function(elem){
            return elem.section === 'Full Stack development';
        })
        
        match.forEach((items)=>{
            filtered+= `<div class="elems">
            <h1>${items.section}</h1>
        </div>`})
        
        container.innerHTML = filtered;
    }else{
        let filtered = '';
        let match =  data.filter(function(elem){
            return elem.section === 'ReactJs';
        })
        
        match.forEach((items)=>{
            filtered+= `<div class="elems">
            <h1>${items.section}</h1>
        </div>`})
        
        container.innerHTML = filtered;
    }
})