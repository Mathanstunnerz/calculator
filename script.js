var screen = document.querySelector("#screen")
var btn = document.querySelectorAll(".btn")
for (item of btn){
    item.addEventListener("click",(e)=>{
         btntext =e.target.innerText;
         var smbol = ['+','-','%','/','.','*']
         var screen_length_value = screen.innerText.slice(-1)
            if(!smbol .includes(screen_length_value)){
            
               
             screen.innerText+=btntext;
             
            }else if(!smbol .includes(btntext)){
                screen.innerText+=btntext;
            }else{
                console.log("dsuhdu")
            }
         
    
        //  if(btntext=='x'){
        //     btntext='*';
        //  }
        
             }     
 )
}
var keyboard = document.querySelector("body")
keyboard.addEventListener("keypress",(e)=>{
    console.log(e);
    
    if(e.code.includes("Digit") || e.code.includes("Numpad")){
      console.log(e.key)
        var last_output = e.key;
        screen.innerText+=last_output;
    }
    else{
        console.log("not a number")
    }
})
function plus_equl(e){
 

}

function screen_eval(){
   var calculate  = eval(screen.innerText)
   var screen2 = document.querySelector("#screen2")

   screen2.innerText =calculate
   screen.innerText = ""
}
function memory(){
    var memory_button= screen2.innerText
    screen.innerText =memory_button
}
function memory1(){
    screen2.innerText = ""
}
function memory2(){
    screen2.innerText = ""
    screen.innerText =' '
}
function pow3(){
    screen.innerText=Math.pow(screen.innerText,3)
}
function pow4(){
    screen.innerText=Math.pow(screen.innerText,4)
}
function sin(){
    screen.innerText=Math.sin(screen.innerText)
}
function cos(){
    screen.innerText=Math.cos(screen.innerText)
}
function tan(){
    screen.innerText=Math.tan(screen.innerText)
}
function pow(){
    screen.innerText=Math.pow(screen.innerText,2)
}
function squrt(){
    screen.innerText=Math.squrt(screen.innerText,2)
}
function log(){
    screen.innerText=Math.log(screen.innerText,2)
}
function pi(){
    screen.innerText=3.14159265359
}
function e(){
    screen.innerText=2.718281828459045
}
function fact(){
    var i , num,f;
    f=1
    num=screen.innerText
    for(i=1; i<num; i++){
        f=f*1
    }
    i=i-1;
    screen.innerText=f;
}
function backspace(){
    screen.innerText=screen.innerText.substring(0,screen.innerText.length-1);
}





