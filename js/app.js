requirejs.config({
    baseUrl: 'js/lib/',
    paths: {
       "jquery":"jquery/jquery-3.1.0.min",
       "route":"route/q",
       "lodash":"lodash/lodash.4.14.1.min"
   }
});

require(["jquery","route","lodash"],function($,_){
    $(function(){

        var M=document.getElementById('m');

        Q.reg('home',function(){
          M.innerHTML='这里是首页';
        }).reg([
        ['about',function(){
            M.innerHTML='我是卜卜口';
        }],
        ['friend',function(){
        M.innerHTML='我的朋友们都在这~';
        }],
            ['void']//这里什么都没有
        ]).reg('void2');//这里也什么都没有

        Q.reg(['猫娘1','猫娘2','猫娘3'],function(){
            M.innerHTML='喵喵喵';
        });



        Q.init({
        index:'home', /* 首页地址 */
        pop:navchange=function(L){/* 每次有url变更时都会触发pop回调 */
        /* L 为当前回调函数名称（目前仅支持关键字回调情况） */

        var a;//临时变量
        if(a=$('.nav a.active')) //如果存在这个DOM
            a.className=''; //修改它的ClassName
        if(a=$('.nav a[href="#!'+L+'"]')) //如果存在这个DOM
            a.className='active';//修改它的ClassName
        }
        });
    })
})
