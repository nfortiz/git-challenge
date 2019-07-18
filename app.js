var os = navigator.platform; 
document.getElementById("msg").innerText='Hello, your os is '+ os;
document.getElementById("myForm").addEventListener('submit', (e)=>{e.preventDefault()});

function changeValueById(id, newValue){
    document.getElementById(id).innerHTML=newValue;
}

function onFormSubmit(){
    changeValueById("txt", "Hola " + document.getElementById("txtName").value);
}

function hiddeObject(e){
    data = {... e};
    return { 
        get: ()=>{return data},
        set: (eN)=>{data={...eN}}
    };
}

function isPrime(n){
    for(let i=2; 1<Math.sqrt(n); i++){
        if(n%i!==0)return false;
    }
    return true;
}