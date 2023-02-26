let input  = document.querySelector("input");

let Itembox = document.querySelector("ul");

input.addEventListener("keyup",function(event){
        // console.log(event.key)
        if(event.key == "Enter"){
           ItemAdd(this.value)
            this.value = "";
        }
})


let ItemAdd = (item)=>{
    let createLi = document.createElement("li");
    createLi.innerHTML= `
        ${item}
        <i class="fa-sharp fa-solid fa-xmark"></i>
    `;
    Itembox.append(createLi)

    createLi.querySelector("i").addEventListener("click",()=>{
        createLi.remove();
    })


}