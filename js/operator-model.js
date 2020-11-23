let operator = "";
let preNum;

function setOperator(ope){
    if(ope === "equal"){
        getResult();
        console.log("preNum:" + preNum + ",num:" + num);
        updateNum();
        return;
    }
    operator = ope;
    preNum = num;
    initNum();
    console.log(ope);
}

function initOperator(){
    operator = "";
}

function getResult(){
    let result;
    switch(operator){
        case "divide":
            result = preNum / num;
            break;
        case "multipy":
            result = preNum * num;
            break;
        case "plus":
            result = preNum + num;
            break;
        case "minus":
            result = preNum - num;
            break;
        default:
            result = num;
    }
    num = result;
}