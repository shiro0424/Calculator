$(function(){
    $(".btn").each(function(){
        $(this).bind("click", function(){
            if(!isNaN($(this).html())){
                setNum($(this).html());
            }else{
                switch ($(this).html()){
                    case "%":
                        setPercent();
                        break;
                    case "CE":
                        clearNum();
                        break;
                    case "C":
                        clearNum();
                        initOperator();
                        break;
                    case "&lt;-":
                        deleteNum();
                        break;
                    case "1/x":
                        setReciprocal();
                        break;
                    case "x^2":
                        setSquare();
                        break;
                    case "2√x":
                        setSqrt();
                        break;
                    case "÷":
                        setOperator("divide");
                        break;
                    case "×":
                        setOperator("multipy");
                        break;
                    case "-":
                        setOperator("minus");
                        break;
                    case "+":
                        setOperator("plus");
                        break;
                    case "=":
                        setOperator("equal");
                        break;
                    case "+/-":
                        setNegative();
                        break;
                    case ".":
                        setDecimal();
                }
            }
        });
    });
});