const data = [
    {img : 'https://images.unsplash.com/photo-1557690267-fad2f168bb95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', heading : 'Mobiles'},
    {img  : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', heading : 'Shoes'},
    {img : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',heading : 'Watch'},
    {img : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',heading : 'Headphones'},
    {img : 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , heading : 'Guitar'},
    {
        img : 'https://images.unsplash.com/photo-1595520407624-66b24f015830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        heading : 'Watches'
    },
    {
        img : 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading : "Bags"
    }
];

let container = document.querySelector('.container');
let input = document.querySelector('#inputBox')

let clutter = ''

data.forEach(function(elem){
    clutter+= `<div class="cards p-1 w-64 h-52 bg-white rounded-lg overflow-hidden">
    <img class="w-full rounded-md h-[80%] object-cover" src="${elem.img}" alt="">
    <h2 class="font-bold m-1 text-lg">${elem.heading}</h2>
</div>`
})

container.innerHTML = clutter;


input.addEventListener('input',function(inp) {
    let filtered = '';
   let match =  data.filter(function(elem){
        return elem.heading.toLocaleLowerCase().startsWith(input.value.toLocaleLowerCase());
    })
    

    match.forEach((items)=>{
        filtered+= `<div class="cards p-1 w-64 h-52 bg-white rounded-lg overflow-hidden">
        <img class="w-full rounded-md h-[80%] object-cover" src="${items.img}" alt="">
        <h2 class="font-bold m-1 text-lg">${items.heading}</h2>
    </div>`
    

    })

    container.innerHTML = filtered;
})