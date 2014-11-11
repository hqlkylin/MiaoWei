/// <reference path="_references.js" />

function getStyle(obj, attr)
{
    if (obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }else
    {
        return getComputedStyle(obj, false)[attr];
    }
}

//function startMove(obj,attr,iTarget, fn)
//{

//    obj.timer = null;
//    obj.ispeed = 0;
//    clearInterval(obj.timer);

//    obj.timer = setInterval(function ()
//    {

//        obj.iCur = parseInt(getStyle(obj, attr));

//        obj.ispeed = iTarget - obj.iCur > 0 ? Math.ceil((iTarget - obj.iCur) / 8) : Math.floor((iTarget - obj.iCur) / 8);

//        if (iTarget == obj.iCur)
//        {
//            clearInterval(obj.timer);
//            if (fn)
//            {
//                fn();
//            }
//        } else
//        {
//            obj.style[attr] = obj.iCur + obj.ispeed + "px";
//        }

//    },30)
//}
function startMove(obj, json, fn)
{


    clearInterval(obj.timer);

    obj.timer = setInterval(function ()
    {

        var bStop = true;
        for (var attr in json)
        {
            //1.取当前值
            var iCur = 0;
            if (attr == "opacity")
            {
               iCur = parseInt(parseFloat(getStyle(obj, attr) * 100));
            }else{
               iCur = parseInt(getStyle(obj, attr));
            }
            //2.算速度
            obj.iSpeed = (json[attr] - iCur) / 8;
            obj.iSpeed = obj.iSpeed > 0 ? Math.ceil(obj.iSpeed) : Math.floor(obj.iSpeed);
            if (json[attr] != iCur)
            {
                bStop = false;
            }
            if (attr == "opacity")
            {
                obj.style.filter = 'alpha(opacity:' + (iCur + obj.iSpeed) + ')'
                obj.style[attr] = (iCur + obj.iSpeed) / 100;
            } else
            {
                obj.style[attr] = iCur + obj.iSpeed + "px";
            }
        }
        //3.检测是否完成
        if (bStop)
        {
            clearInterval(obj.timer);
            if (fn)
            {
                fn();
            }
        }

    }, 30)


}

