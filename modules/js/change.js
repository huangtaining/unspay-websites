
//    点击更换内容
$(function(){


    function aanr(ii,oo,aa,ff){
        console.log("ssss");
        var _i=$(ii).html()||$(ii).val();
        //aa.on(ff,function(){
        //
        //});
        $(aa).on(ff,function(){
            console.log(aa,oo,_i);
            $(oo).val(_i)||$(oo).html(_i)
        });

        //$(cc).on(ff,function(){
        //    $(oo).val($(ii).val())
        //})
    }
    //第一个输入的，第二个输出位置，第三个触发的元素，第四个触发的事件
    aanr("#ii","#oo","#tt",'click');
});
