function updateNum(){
    if(getNumStr().length > 13){
        document.getElementById("screen").style.fontSize = "30px";
    }else{
        document.getElementById("screen").style.fontSize = "50px";
    }
    $("#screen").html(getNumStr());
}

