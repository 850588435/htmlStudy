(function(){


    var cssCon="";
    var regex=/\.[a-zA-Z0-9_\-]*{/g;
    var arr=new Array();
    var fei_arr=12;
    var str="";
    var num=78;
    var myCollection=new Array();

    function color16(){//rgb颜色随机
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var rgb = 'rgb('+r+','+g+','+b+')';
        return rgb;
    }



    function getAnimate(){
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function(){

            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                cssCon=xmlhttp.responseText;
                arr=cssCon.match(regex);
                for(var i=0;i<arr.length;i++){
                    arr[i]=arr[i].slice(1,-1);

                }
                for(var j=0;j<fei_arr;j++){
                    //删除数组最后12个class
                    arr.splice((arr.length-1),1);
                    
                }

                str+="<p>Animate.css样式预览</p><div class='con'>";
                for(var i=0;i<num;i++){
                    str+="<div class='aaa'><p id='"+arr[i]+"' class='"+arr[i]+" animated'>Animate.css</p><span>"+arr[i]+"</span></div>";
                }
                str+="</div>";              
                document.getElementsByTagName("body")[0].innerHTML=str;
                for(var i=0;i<num;i++){
                    document.getElementById(arr[i]).style.color=color16();
                }
            }
        }
        xmlhttp.open("GET","https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css",true);
        xmlhttp.send();
    }

    

    window.onload=function(){
        getAnimate();
    }

})()



