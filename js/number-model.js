let num;
let isNegative;
let decimal;
let hasPercent;

initNum();

function setNum(n){
    if(getNumStr().length < 19){
        n = parseInt(n);
        if(decimal > 0){
            num += n * Math.pow(10, decimal * (-1));
            decimal++;
        }else{
            num = num * 10 + n;
        }
        console.log("n:" + n + ",num:" + num);
        updateNum();
    }

}

function initNum(){
    num = 0;
    isNegative = false;
    decimal = 0;
    hasPercent = false;
    updateNum();
}

function getNumStr(){
    let temp = num;
    let str = "";
    if(hasPercent){
        temp *= 100;
    }
    if(decimal > 0){
        str += ".";
        if(decimal > 1) {
            temp = temp.toFixed(decimal - 1);
            str += (temp % 1.0).toFixed(decimal - 1);
            str = str.substring(2);
            temp = Math.floor(temp);
        }
    }
    while(temp / 1000 > 1){
        str = ("," + temp % 1000) + str;
        temp /= 1000;
        temp = Math.floor(temp);
    }
    str = temp + str;
    if(hasPercent){
        str += "%";
    }

    return str;
}

function setPercent(){
    if(hasPercent){
        hasPercent = false;
        num *= 100;
    }else{
        hasPercent = true;
        num /= 100;
    }
    updateNum();
}

function setNegative(){
    isNegative = !isNegative;
    num *= (-1);
    updateNum();
}

function setDecimal(){
    if(decimal === 0){
        decimal = 1;
    }
    updateNum();
}

function setReciprocal(){
    num = 1 / num;
    updateNum();
}

function setSquare(){
    num = Math.pow(num, 2);
    updateNum();
}

function setSqrt(){
    num = Math.pow(num, 0.5);
    updateNum();
}

function deleteNum(){
    if(decimal === 0){
        num /= 10;
        num = Math.floor(num);
    }else{
        num = num.toFixed(decimal - 1);
        decimal--;
    }
    updateNum();
}

function clearNum(){
    initNum();
    updateNum();
}