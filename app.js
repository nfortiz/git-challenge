var os = navigator.platform; 
document.getElementById("msg").innerText='Hello, your os is '+ os;

function changeValueById(id, newValue){
    document.getElementById(id).innerHTML=newValue;
}
