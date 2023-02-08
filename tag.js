let myInput = document.querySelector('.inputbox input');
let tagList = document.querySelector('.taglist');
let outInp = document.querySelector('#output');


function myFunction(){
myInput.addEventListener('keypress', function(event){
    let inputtext = myInput.value;

    if(event.keyCode == 13 ){
        myInput.value = '';
        let span = document.createElement('span');
        let i = document.createElement('i');
        i.innerHTML = '<i class="fa-solid fa-x"></i>'
        i.style.marginLeft = '5px';
        span.textContent = inputtext;
        span.classList.add('tagspan');
        span.appendChild(i)
        tagList.appendChild(span);
        
        

        i.addEventListener('click', function(){
            span.remove('tagspan')
        })
        


    } 
 
});

};;
myFunction();


// function copyVal(){
//     let val1 = document.getElementById('inp1');
//     let val2 = document.getElementById('inp2');
//      inp2.value = inp1.value
// }
// copyVal()








