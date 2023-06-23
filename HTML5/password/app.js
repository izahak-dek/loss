const pass = document.getElementById("pass");
function showHide(){
    if(pass.type === "password"){
        pass.type = "text"
    }else{
        pass.type = "password"
    }
}