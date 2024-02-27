let namety = document.querySelector(".namety");
let named = namety.innerHTML;
let namedArr = named.split("");
namety.innerHTML = "";
let typing = 0;

function typejs(){
    if(typing < named.length){
        namety.innerHTML += named.charAt(typing)
        typing++
        namedArr = named.split("");
    }else{
        namedArr.pop("");
        namety.innerHTML = namedArr.join("")
        if(namedArr.length==0){
            typing = 0;
        }
    }
}


 setInterval(()=>{
    typejs()
 },500)