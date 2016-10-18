/**
 * Created by Administrator on 2016/9/10.
 */
// JavaScript Document

var $ = require('jquery');

//点击出现
$(".jisuan").click(function(e){
    var _ox=e.clientX;
    var _oy=e.clientY;
    var _oo=window.scrollY;
    console.log(_ox+"ssss"+_oy);
    $(".jsq").show().css({left:_ox+100,top:_oy+_oo});
    $("#input-box").val($(".chinain").val())
});


for(var i=0;i<$(".jsqn").length;i++){

    $(".jsqn").eq(i).click(function(){
        var _num=$(this).html();
        typetoinput(_num)
    })
}


for(var i=0;i<$(".jsqy").length;i++){

    $(".jsqy").eq(i).click(function(){
        var _yun=$(this).attr("data-jsq");
        operator(_yun)
    })
}


$(".int").click(function(){
    var _result=$("#input-box").val();
    //结果输出在哪里；

    $(".jisuan").siblings("input").val(_result);
    china(_result,$(".chinaout"));
    $(".jsq").hide();
    $(".ysbbd").validate();
});


$(".clea").click(function(){
    $("#input-box").val(0);
    $(".jsq").hide();
});


document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");
var _string=new Array();
var _type;

function typetoinput(num)
{
     input=document.getElementById("input-box");
    if(input.name=="type")
    {
        input.value=" ";
        input.name=" ";
    }
    if(num!="."&&input.value[0]==0&&input.value[1]!=".")
    {
        input.value=num; //Reset input num
    }
    else if(num=="."&&input.value.indexOf(".")>-1)
    {
        input.value=input.value; //Only one point allow input
    }
    else if(input.value=="Infinity"||input.value=="NaN")
    {
        input.value="";
        input.value+=num; //Splicing string
    }
    else
    {
        input.value+=num;
    }
}

function operator(type)
{
    switch (type)
    {
        case "clear":
            input.value="0";
            _string.length=0;
            /*document.getElementById("ccc").innerHTML="";
             for(i=0;i<_string.length;i++)
             {
             document.getElementById("ccc").innerHTML+=_string[i]+" "
             }*/
            break;
        case "backspace":
            if(checknum(input.value)!=0)
            {
                input.value=input.value.replace(/.$/,'');
                if(input.value=="")
                {
                    input.value="0";
                }
            }
            break;
        case "opposite":
            if(checknum(input.value)!=0)
            {
                input.value=-input.value;
            }
            break;
        case "percent":
            if(checknum(input.value)!=0)
            {
                input.value=input.value/100;
            }
            break;
        case "pow":
            if(checknum(input.value)!=0)
            {
                input.value=Math.pow(input.value,2);
            }
            break;
        case "sqrt":
            if(checknum(input.value)!=0)
            {
                input.value=Math.sqrt(input.value);
            }
            break;
        case "plus":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="plus"
                input.value="+";
                input.name="type";
            }
            break;
        case "minus":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="minus"
                input.value="-";
                input.name="type";
            }
            break;
        case "multiply":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="multiply"
                input.value="×";
                input.name="type";
            }
            break;
        case "divide":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                _type="divide"
                input.value="÷";
                input.name="type";
            }
            break;
        case "result":
            if(checknum(input.value)!=0)
            {
                _string.push(input.value);
                if(parseInt(_string.length)%2!=0)
                {
                    _string.push(_string[_string.length-2])
                }
                if(_type=="plus")
                {
                    input.value=parseFloat(result(_string)[0])+parseFloat(result(_string)[1]);
                    input.name="type"
                }
                else if(_type=="minus")
                {
                    input.value=parseFloat(result(_string)[0])-parseFloat(result(_string)[1]);
                    input.name="type"
                }
                else if(_type=="multiply")
                {
                    input.value=parseFloat(result(_string)[0])*parseFloat(result(_string)[1]);
                    input.name="type"
                }
                else if(_type=="divide")
                {
                    input.value=parseFloat(result(_string)[0])/parseFloat(result(_string)[1]);
                    input.name="type"
                }
                break;
            }

    }
}

function result(value)
{
    var result=new Array;
    if(value.length%2==0)
    {
        result.push((value[value.length-2]));
        result.push((value[value.length-1]));
        return (result);
    }
    else
    {
        result.push((value[value.length-1]))
        result.push((value[value.length-2]))

        return (result);
    }
}

function checknum(inputvalue)
{
    if(inputvalue=="+"||inputvalue=="-"||inputvalue=="×"||inputvalue=="÷"||input.value=="0")
    {
        return 0;
    }
}
if($(".jsq")){
    $(".chinain").keydown(disableRefresh)
}

function disableRefresh(evt){
    evt = (evt) ? evt : window.event;
    $("#input-box").val($(".chinain").val());
    if (evt.keyCode)
    {
        if(evt.keyCode == 13){operator('result')}
        else if(evt.keyCode == 8){operator('backspace')}
        else if(evt.keyCode == 27){operator('clear')}
        else if(evt.keyCode == 48){typetoinput('0')}
        else if(evt.keyCode == 49){typetoinput('1')}
        else if(evt.keyCode == 50){typetoinput('2')}
        else if(evt.keyCode == 51){typetoinput('3')}
        else if(evt.keyCode == 52){typetoinput('4')}
        else if(evt.keyCode == 53){typetoinput('5')}
        else if(evt.keyCode == 54){typetoinput('6')}
        else if(evt.keyCode == 55){typetoinput('7')}
        else if(evt.keyCode == 56){typetoinput('8')}
        else if(evt.keyCode == 57){typetoinput('9')}
        else if(evt.keyCode == 96){typetoinput('0')}
        else if(evt.keyCode == 97){typetoinput('1')}
        else if(evt.keyCode == 98){typetoinput('2')}
        else if(evt.keyCode == 99){typetoinput('3')}
        else if(evt.keyCode == 100){typetoinput('4')}
        else if(evt.keyCode == 101){typetoinput('5')}
        else if(evt.keyCode == 102){typetoinput('6')}
        else if(evt.keyCode == 103){typetoinput('7')}
        else if(evt.keyCode == 104){typetoinput('8')}
        else if(evt.keyCode == 105){typetoinput('9')}
        else if(evt.keyCode == 110){typetoinput('.')}
        else if(evt.keyCode == 106){operator('multiply')}
        else if(evt.keyCode == 107){operator('plus')}
        else if(evt.keyCode == 111){operator('divide')}
        else if(evt.keyCode == 109){operator('minus')}
    }
};

//    阿拉伯数字转化为中文
function china(chin,chout) {
//        哪里需要转换大小写


    if(chin!=0){
        daxiaoxie(chin,chout)
    }else{
        chout.val("");
    }

    function daxiaoxie(n,chout) {
        var fraction = ['角', '分'];
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
        var head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        var _bigmoney = head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
//              输出到哪里
        (chout.val(_bigmoney))&&(chout.html(_bigmoney));
    }


}


