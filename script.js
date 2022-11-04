let password = document.querySelector('#pass');

let conform = document.querySelector("#passCon")

let match = document.querySelector("#match")

let button = document.querySelector('.st-btn');

button.addEventListener('click',()=>{
    if( password.value !=conform.value){
    match.textContent='password does not match'
    
    
    
    }
    else{
        match.textContent=''
    }})
