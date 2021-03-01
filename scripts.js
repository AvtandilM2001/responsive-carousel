let slide = document.getElementById("images");
let startpoint = null;
let move = false;
let left = null;

var startstate = (e) => {
    startpoint = e.pageX;
    move = true;
    let matrix = window.getComputedStyle(images).getPropertyValue('transform');
    if(matrix != 'none'){
        left = parseInt(matrix.split(',')[4].trim())
    }
}

var movestate = (e) => {
        let movement = e.pageX;
        let diff=movement-startpoint;
       if(move==true) {
            slide.style.transform = `translateX(${left+(diff*2)}px)`;
        }
    }

var endstate = (e) => {    
    move = false;
}

if(window.PointerEvent){
    window.addEventListener('pointerdown', startstate);    
    window.addEventListener('pointermove', movestate);  
    window.addEventListener('pointerup', endstate);    
}else{
    window.addEventListener('touchdown', startstate);    
    window.addEventListener('touchmove', movestate);    
    window.addEventListener('touchup', endstate);    
    window.addEventListener('mousedown', startstate);    
    window.addEventListener('mousemove', movestate);
    window.addEventListener('mouseup' , endstate);
}





 