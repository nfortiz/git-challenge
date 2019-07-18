var os = navigator.platform; 
document.getElementById("msg").innerText='Hello, your os is '+ os;
document.getElementById("myForm").addEventListener('submit', (e)=>{e.preventDefault()});

function changeValueById(id, newValue){
    document.getElementById(id).innerHTML=newValue;
}

function onFormSubmit(){
    changeValueById("txt", "Hola " + document.getElementById("txtName").value);
}
