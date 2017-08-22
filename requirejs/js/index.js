/**
 * Created by 10989 on 2017/8/22.
 */
var oOpen=document.getElementById("open");
oOpen.onclick = function () {
    var oDialogMain=document.getElementsByClassName("dialog-main");
    oDialogMain[0].style.display="block";
    var oDialogMask=document.getElementsByClassName("dialog-mask");
    oDialogMask[0].style.display="block";
};
var oclose=document.getElementsByClassName("dialog-title-close");
oclose[0].onclick=function () {
    var oDialogMain=document.getElementsByClassName("dialog-main");
    oDialogMain[0].style.display="none";
    var oDialogMask=document.getElementsByClassName("dialog-mask");
    oDialogMask[0].style.display="none";
};