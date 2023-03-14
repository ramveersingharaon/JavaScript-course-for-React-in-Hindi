let buttons = document.querySelectorAll("button");
let type = document.getElementById("type")
let result = document.getElementById("result");

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        // console.log(this.innerHTML)
        if(this.innerHTML == "="){
             type.innerHTML= eval(type.innerHTML)
             result.innerHTML = type.innerHTML
             type.innerHTML = ""
        }else if(this.innerHTML == "C"){
            type.innerHTML = ""
            result.innerHTML = "0"
        }else if(this.innerText == "E"){
          type.innerText = type.innerText.substr(0,type.innerText.length-1)
        }else if(this.innerHTML == "X"){
                       type.innerHTML= type.innerHTML+ "*"
        }
        
        else{
            type.innerHTML = type.innerHTML+ this.innerHTML

        }
    })
}

document.addEventListener("keyup",function(e){
    // console.log(e.key)

    if(e.key == "Enter"|| e.key == "="){
        type.innerHTML= eval(type.innerHTML)
        result.innerHTML = type.innerHTML
        type.innerHTML = null
    }else if(e.key == "C" || e.key == "c"){
        type.innerHTML = ""
        result.innerHTML = "0"
    }else if(e.key == "E" || e.key=="Backspace"||e.key =="e"){
        type.innerText = type.innerText.substr(0,type.innerText.length-1)
      }
    
    
    else{

        type.innerHTML =type.innerHTML+ e.key
    }
})