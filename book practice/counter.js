let counter =   0;
function count(){
    counter++;
    // alert (counter);
    document.querySelector('h1').innerHTML=counter;

    if(counter%5===0){
        alert('Таны"Тоолох"товч дээрх даралтын тоо:${counter}');
    }
    }

// document.querySelector('button).omclick=count;

document.addEventListener('DOMContentLoaded',function()){
//document.querySelector('button').onclick=count;
document.querySelector('button').addEventListener('click',count);
}
    
